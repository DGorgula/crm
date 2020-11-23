import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import network from "../../helpers/network";
import DoneIcon from "@material-ui/icons/Done";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import {
  Wrapper,
  TitleWrapper,
  H1,
  Center,
} from "../../styles/styledComponents";
import { useHistory } from "react-router-dom";
import { IJob } from "../../typescript-utils/interfaces";

const AddJob = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const empty = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const onSubmit = async (data: Omit<IJob, "id">) => {
    try {
      await network.post("/api/v1/job", data);
      history.push("/job/all");
    } catch (e) {
      alert("error occurred");
    }
  };

  return (
    <Wrapper>
      <Center>
        <TitleWrapper>
          <H1 color="red">Add Job</H1>
        </TitleWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="company"
            label="Company"
            name="company"
            inputRef={register({
              required: "Company is required",
            })}
          />
          {!empty ? (
            errors.company ? (
              <Tooltip title={errors.company.message}>
                <IconButton style={{ cursor: "default" }}>
                  <ErrorOutlineIcon
                    style={{ width: "30px", height: "30px" }}
                    color="error"
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <IconButton style={{ cursor: "default" }}>
                <DoneIcon color="action" />
              </IconButton>
            )
          ) : null}
          <br />
          <TextField
            id="position"
            label="Position"
            inputRef={register({ required: "Position title is required" })}
            name="position"
          />
          {!empty ? (
            errors.position ? (
              <Tooltip title={errors.position.message}>
                <IconButton style={{ cursor: "default" }}>
                  <ErrorOutlineIcon
                    style={{ width: "30px", height: "30px" }}
                    color="error"
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <IconButton style={{ cursor: "default" }}>
                <DoneIcon color="action" />
              </IconButton>
            )
          ) : null}
          <br />
          {/* <TextField
            name="contact"
            inputRef={register({ required: "Contact is required" })}
            label="Contact"
          />
          {!empty ? (
            errors.contact ? (
              <Tooltip title={errors.contact.message}>
                <IconButton style={{ cursor: "default" }}>
                  <ErrorOutlineIcon
                    style={{ width: "30px", height: "30px" }}
                    color="error"
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <IconButton style={{ cursor: "default" }}>
                <DoneIcon color="action" />
              </IconButton>
            )
          ) : null}
          <br /> */}
          <TextField
            id="location"
            name="location"
            inputRef={register({
              required: "Location is required",
            })}
            label="Location"
          />
          {!empty ? (
            errors.location ? (
              <Tooltip title={errors.location.message}>
                <IconButton style={{ cursor: "default" }}>
                  <ErrorOutlineIcon
                    style={{ width: "30px", height: "30px" }}
                    color="error"
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <IconButton style={{ cursor: "default" }}>
                <DoneIcon color="action" />
              </IconButton>
            )
          ) : null}
          <br />
          <br />
          {/* <TextField
            multiline
            rows={4}
            variant="outlined"
            name="description"
            inputRef={register({ required: "Description is required" })}
            label="Description"
          />
          {!empty ? (
            errors.description ? (
              <Tooltip title={errors.description.message}>
                <IconButton style={{ cursor: "default" }}>
                  <ErrorOutlineIcon
                    style={{ width: "30px", height: "30px" }}
                    color="error"
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <IconButton style={{ cursor: "default" }}>
                <DoneIcon color="action" />
              </IconButton>
            )
          ) : null}
          <br />
          <br /> */}
          <TextField
            id="requirements"
            multiline
            rows={4}
            variant="outlined"
            name="requirements"
            inputRef={register({
              required: "Requirements are required",
            })}
            label="Job Requirements"
          />
          {!empty ? (
            errors.requirements ? (
              <Tooltip title={errors.requirements.message}>
                <IconButton style={{ cursor: "default" }}>
                  <ErrorOutlineIcon
                    style={{ width: "30px", height: "30px" }}
                    color="error"
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <IconButton style={{ cursor: "default" }}>
                <DoneIcon color="action" />
              </IconButton>
            )
          ) : null}
          <br />
          <br />
          <Button
            id="submitButton"
            style={{ backgroundColor: "#bb4040", color: "white" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Center>
    </Wrapper>
  );
};

export default AddJob;
