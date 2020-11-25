ZONE=${GCE_INSTANCE_ZONE}
LOCAL_TAG=${GCE_INSTANCE}-image:$(GITHUB_SHA)
REMOTE_TAG=gcr.io/${PROJECT_ID}/$(LOCAL_TAG)
CONTAINER_NAME=songapp-container

ssh-cmd:
	@gcloud --quiet compute ssh \
		--zone ${ZONE} ${GCE_INSTANCE} --command "$(CMD)"

build:
	docker build -t $(LOCAL_TAG) .

push:
	docker tag $(LOCAL_TAG) $(REMOTE_TAG)
	docker push $(REMOTE_TAG)

create:
	@gcloud compute instances create ${GCE_INSTANCE} \
		--image-project cos-cloud \
		--image cos-stable-85-13310-1041-28 \
		--zone $(ZONE) \
		--service-account ${SERVICE_ACCOUNT} \
		--tags http-server \
		--machine-type e2-medium

deploy: 
	$(MAKE) ssh-cmd CMD='docker-credential-gcr configure-docker'
	@echo "pulling image..."
	$(MAKE) ssh-cmd CMD='docker pull $(REMOTE_TAG)'
	@echo "creating network..."
	-$(MAKE) network-init
	@echo "initializing sql (if exists, continue on error)..."
	-${MAKE} sql-init
	@echo "stopping old container..."
	-$(MAKE) ssh-cmd CMD='docker container stop $(CONTAINER_NAME)'
	@echo "removing old container..."
	-$(MAKE) ssh-cmd CMD='docker container rm $(CONTAINER_NAME)'
	@echo "starting new container..."
	@$(MAKE) ssh-cmd CMD='\
		docker run -d --name=$(CONTAINER_NAME) \
			--restart=unless-stopped \
			--network crm-net \
			-e MYSQL_HOST=mysql \
			-e MYSQL_DATABASE=database_development \
			-e MYSQL_USER=${DB_USER} \
			-e MYSQL_PASSWORD=${DB_PASS} \
			-p 8080:8080 \
			$(REMOTE_TAG) \
			'
	@echo "Good Job Deploy Succeded !"

network-init:
	$(MAKE) ssh-cmd CMD='docker network create crm-net'

create-firewall-rule:
	@gcloud compute firewall-rules create default-allow-http-${SERVER_PORT} \
		--allow tcp:${SERVER_PORT} \
		--source-ranges 0.0.0.0/0 \
		--target-tags http-server \
		--description "Allow port ${SERVER_PORT} access to http-server"

sql-init:
	$(MAKE) ssh-cmd CMD=' \
	docker run --name=mysql \
	-e MYSQL_ROOT_PASSWORD=${DB_PASS} \
	-e MYSQL_DATABASE=database_development \
	-e MYSQL_USER=${DB_USER} \
	-e MYSQL_PASSWORD=${DB_PASS} \
	--network crm-net \
	-d mysql:8 \
	'