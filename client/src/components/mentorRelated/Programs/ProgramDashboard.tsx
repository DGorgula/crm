import React, { useState, useEffect, useCallback, useContext } from "react";
import network from "../../../helpers/network";
import {
  H1,
  Wrapper,
  TitleWrapper,
  StyledLink,
  Center,
  StyledSpan,
  StyledUl,
  StyledDiv,
  TableHeader,
} from "../../../styles/styledComponents";
import { Button } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import {
  IMentorProgramDashboard,
  IMentorProgram,
  IMentorProgramForms,
  ITask
} from "../../../typescript/interfaces";
import EditIcon from "@material-ui/icons/Edit";
import { Loading } from "react-loading-wrapper";
import { AuthContext } from "../../../helpers";
import "react-loading-wrapper/dist/index.css";
import ClassIcon from "@material-ui/icons/Class";
import { capitalize } from "../../../helpers/general";
import SimpleModal from "../Modal";
import AddFormModal from "./AddFormModal";
import { formatToIsraeliDate } from "../../../helpers/general";
import Swal from "sweetalert2";
import DeleteIcon from "@material-ui/icons/Delete";
import SendMailModal from "./SendMailsModal";

const ProgramDashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tabelsData, setTabelData] = useState<IMentorProgramDashboard[]>([]);
  const [programdetails, setProgramDetails] = useState<IMentorProgram>();
  const [forms, setForms] = useState<IMentorProgramForms>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalBody, setModalBody] = useState<any>();
  const [availableMentors, setAvailableMentors] = useState<any[]>([]);
  const { id } = useParams();
  const history = useHistory();
  const {user} = useContext<any>(AuthContext);
  console.log(user);
  

  const getTableData = useCallback(async () => {
    const program = await network.get(`/api/v1/M/program/${id}`);
    setProgramDetails(program.data);
    const dashboardData = await network.get(
      `/api/v1/M/program/dashboard/${id}`
    );
    setTabelData(dashboardData.data);
    setLoading(false);
  }, []);

  const getAvailableMentors = useCallback(async () => {
    const { data } = await network.get(`/api/v1/M/mentor/available`);
    setAvailableMentors(data);
  }, []);

  const getForms = useCallback(async () => {
    const formsData = await network.get(`/api/v1/M/program/forms/${id}`);
    console.log(formsData.data);
    setForms(formsData.data);
  }, []);

  useEffect(() => {
    getTableData();
    getAvailableMentors();
    getForms();
  }, [getTableData, getAvailableMentors, getForms]);

  const endProgram = async () => {
    try {
      await network.put(`/api/v1/M/program/end/${id}`);
      history.push("/mentor");
    } catch (err) {
      console.error(err.message);
    }
  };

  const promptAreYouSure: () => Promise<boolean> = async () => {
    return Swal.fire({
      title: "Are you sure?",
      text: "This Form will delete, and you would'nt watch it any more ",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#2fa324",
      confirmButtonText: "Delete!",
    }).then((result) => {
      if (result.isConfirmed) return true;
      return false;
    });
  };

  const deleteForm = async (id: number) => {
    const res: boolean = await promptAreYouSure();
    if (!res) return;
    try {
      await network.patch("/api/v1/M/form/delete", { formId: id });
      getForms()
    } catch (err) {
      Swal.fire("Error Occurred", err.message, "error");
    }
  };

  const postTask = async (title:string, url:string, ) => {
    try {
      const task:ITask = {
        title: `mentor program form -${title}`,
        externalLink: url,
        createdBy: 1, /*user.id*/
        endDate: new Date(Date.now()+(3*24*60*60*1000)),
        type:"manual",
        status: "active"
    };
    const studentsToTask = tabelsData.map(student => student.id)
      console.log(task);
      console.log(studentsToTask);
      await network.post("/api/v1/task/tostudents", {
        ...task,
        idArr: studentsToTask,
      });
      Swal.fire("Success", "task added successfully", "success");
    } catch(err){
      Swal.fire("Error Occurred", err.message, "error");
    }
  };

  return (
    <>
      <Wrapper width="80%">
        <Center>
          <TitleWrapper>
            <Loading loading={loading} size={30}>
              {programdetails && (
                <H1 color="#c47dfa">{`${programdetails.name}`}</H1>
              )}
            </Loading>
          </TitleWrapper>
        </Center>
        <br />
        <Button
          style={{ backgroundColor: "#fa8c84" }}
          onClick={() => endProgram()}
        >
          End Program
        </Button>
        <Button
          onClick={() =>
            history.push(`/mentor/new/${id}?class=${programdetails?.classId}`)
          }
          style={{ backgroundColor: "#fa8c84", margin: 10 }}
        >
          Edit Program
        </Button>
        <AddFormModal getForms={getForms} id={id} />
        <SendMailModal id={id}/>
        <SimpleModal
          open={modalOpen}
          setOpen={setModalOpen}
          modalBody={modalBody}
        />
        <Loading loading={loading} size={30}>
          <StyledUl>
            {tabelsData && (
              <li key="li">
                <TableHeader repeatFormula="0.5fr 1fr 1fr 1fr 1fr 0.75fr 0.5fr">
                  <ClassIcon />
                  <StyledSpan weight="bold">Student Name</StyledSpan>
                  <StyledSpan weight="bold">Mentor Name</StyledSpan>
                  <StyledSpan weight="bold">Mentor Company</StyledSpan>
                  <StyledSpan weight="bold">Meetings</StyledSpan>
                  <StyledSpan weight="bold">Pair Page</StyledSpan>
                </TableHeader>
              </li>
            )}
            {tabelsData &&
              tabelsData.map((row, i) => (
                <li key={i}>
                  <StyledDiv repeatFormula="0.5fr 1fr 1fr 1fr 1fr 0.75fr 0.5fr">
                    <ClassIcon />
                    <StyledLink to={`/student/${row.id}`} color="black">
                      <StyledSpan weight="bold">{`${row.firstName} ${row.lastName}`}</StyledSpan>
                    </StyledLink>
                    {row.MentorStudents &&
                    row.MentorStudents[0] &&
                    row.MentorStudents[0].Mentor ? (
                      <>
                        <StyledLink
                          to={`/mentor/${row.MentorStudents[0].Mentor.id}`}
                          color="black"
                        >
                          <StyledSpan weight="bold">
                            {capitalize(row.MentorStudents[0].Mentor.name)}
                          </StyledSpan>
                        </StyledLink>
                        <StyledSpan>
                          {row.MentorStudents[0].Mentor.company}
                        </StyledSpan>
                        <StyledSpan>
                          {row.MentorStudents[0].Meetings &&
                            row.MentorStudents[0].Meetings.length}
                        </StyledSpan>
                        <StyledSpan>
                          <StyledLink
                            to={`/mentor/meeting/${row.MentorStudents[0].id}`}
                            color="black"
                          >
                            <Button>Show</Button>
                          </StyledLink>
                        </StyledSpan>
                      </>
                    ) : (
                      <>
                        <span>-</span>
                        <span>-</span>
                        <span>-</span>
                        <span>-</span>
                      </>
                    )}
                    <StyledSpan>
                      <Button
                        onClick={async () => {
                          setModalBody(
                            <Wrapper width="80%">
                              <Center>
                                <TitleWrapper>
                                  <H1 color="#c47dfa">Pick Mentor</H1>
                                </TitleWrapper>
                              </Center>
                              <br />
                              <StyledUl>
                                {availableMentors.map((mentor) => (
                                  <li>
                                    <StyledDiv
                                      repeatFormula="0.5fr 1fr 1fr 1fr 1fr "
                                      onClick={async () => {
                                        row.MentorStudents &&
                                        row.MentorStudents[0] &&
                                        row.MentorStudents[0].Mentor
                                          ? await network.put(
                                              `/api/v1/M/classes/${row.MentorStudents[0].id}`,
                                              {
                                                mentorProgramId: id,
                                                mentorId: mentor.id,
                                                studentId: row.id,
                                              }
                                            )
                                          : await network.post(
                                              "/api/v1/M/classes",
                                              {
                                                mentorProgramId: id,
                                                mentorId: mentor.id,
                                                studentId: row.id,
                                              }
                                            );
                                        getTableData();
                                        getAvailableMentors();
                                        setModalOpen(false);
                                      }}
                                    >
                                      <StyledSpan weight="bold">
                                        {mentor.MentorStudents.length || 0}
                                      </StyledSpan>
                                      <StyledSpan weight="bold">
                                        {capitalize(mentor.name)}
                                      </StyledSpan>
                                      <StyledSpan>{mentor.address}</StyledSpan>
                                      <StyledSpan>{mentor.company}</StyledSpan>
                                      <StyledSpan>{mentor.job}</StyledSpan>
                                    </StyledDiv>
                                  </li>
                                ))}
                              </StyledUl>
                            </Wrapper>
                          );
                          setModalOpen(true);
                        }}
                      >
                        <EditIcon />
                      </Button>
                    </StyledSpan>
                  </StyledDiv>
                </li>
              ))}
          </StyledUl>
        </Loading>
      </Wrapper>
      {forms?.MentorForms && forms.MentorForms[0] && (
        <Wrapper width="80%">
          <Center>
            <TitleWrapper>
              <Loading loading={loading} size={30}>
                {programdetails && <H1 color="#c47dfa">PROGRAM FORMS</H1>}
              </Loading>
            </TitleWrapper>
          </Center>
          <StyledUl>
            <li key="li">
              <TableHeader repeatFormula="1fr 1fr 1fr 0.2fr">
                <StyledSpan weight="bold">Title</StyledSpan>
                <StyledSpan weight="bold">Create Date</StyledSpan>
                <StyledSpan weight="bold">Send</StyledSpan>
              </TableHeader>
            </li>
            {forms.MentorForms.map((form, i) => (
              <li key={i}>
                <StyledDiv repeatFormula="1fr 1fr 1fr 0.2fr">
                  <a
                    style={{ color: "black", textDecoration: "none" }}
                    href={form.url}
                    color="black"
                    target="_blank"
                  >
                    <StyledSpan>{form.title}</StyledSpan>
                  </a>
                  <a
                    style={{ color: "black", textDecoration: "none" }}
                    href={form.url}
                    color="black"
                    target="_blank"
                  >
                    <StyledSpan>
                      {formatToIsraeliDate(form.createdAt)}
                    </StyledSpan>
                  </a>
                  <StyledSpan>
                    <Button onClick={()=>postTask(form.title, form.answerUrl)}>send to the students</Button>
                  </StyledSpan>
                  <StyledSpan>
                    <DeleteIcon style={{cursor:"pointer"}} onClick={() => deleteForm(form.id!)} />
                  </StyledSpan>
                </StyledDiv>
              </li>
            ))}
          </StyledUl>
        </Wrapper>
      )}
    </>
  );
};

export default ProgramDashboard;
