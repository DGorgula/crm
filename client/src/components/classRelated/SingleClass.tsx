import React, { useCallback, useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EmailIcon from "@material-ui/icons/Email";
import {
  H1,
  Wrapper,
  TitleWrapper,
  Center,
  RemoveJobButton,
  GridDiv,
  MultilineListItem,
} from "../../styles/styledComponents";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DialpadIcon from "@material-ui/icons/Dialpad";
import SubjectIcon from "@material-ui/icons/Subject";
import ClassIcon from "@material-ui/icons/Class";
import { useParams } from "react-router-dom";
import network from "../../helpers/network";
import { Loading } from "react-loading-wrapper";
import "react-loading-wrapper/dist/index.css";
import { IStudent, IClass, IEvent } from "../../typescript/interfaces";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import PostAddIcon from "@material-ui/icons/PostAdd";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import BusinessIcon from "@material-ui/icons/Business";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import IconButton from "@material-ui/core/IconButton";
import LinkIcon from "@material-ui/icons/Link";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { formatToIsraeliDate } from "../../helpers/general";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: 10,
      marginTop: 3,
    },
    iconButton: {
      fontSize: theme.typography.pxToRem(10),
      padding: 0,
      marginLeft: "auto",
    },
  })
);

function SingleClass() {
  const [cls, setCls] = useState<IClass | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const classes = useStyles();

  const getClass = useCallback(async () => {
    const { data }: { data: IClass } = await network.get(
      `/api/v1/class/byId/${id}`
    );
    setCls(data);
    setLoading(false);
  }, [id, setLoading, setCls]);

  useEffect(() => {
    try {
      getClass();
    } catch (e) {
      console.log(e.message);
    }
    //eslint-disable-next-line
  }, [getClass]);

  return (
    <>
      <Wrapper width="80%">
        <Center>
          <TitleWrapper>
            <H1 color="#2c6e3c">Class Info</H1>
          </TitleWrapper>
        </Center>
        <Loading size={30} loading={loading}>
          <GridDiv repeatingFormula="1fr 1fr">
            <List>
              <ListItem>
                <ListItemIcon>
                  <ClassIcon />
                </ListItemIcon>
                <ListItemText primary="Name" secondary={cls?.name} />
              </ListItem>
              {/* Name */}
              <ListItem>
                <ListItemIcon>
                  <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Starting Date"
                  secondary={formatToIsraeliDate(cls?.startingDate!)}
                />
              </ListItem>
              {/* Starting Date */}
              <ListItem>
                <ListItemIcon>
                  <RotateLeftIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Cycle Number"
                  secondary={cls?.cycleNumber}
                />
              </ListItem>
              {/* Cycle number */}
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ClassIcon />
                </ListItemIcon>
                <ListItemText primary="Course" secondary={cls?.course} />
              </ListItem>
              {/* Course */}
              <ListItem>
                <ListItemIcon>
                  <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Ending Date"
                  secondary={formatToIsraeliDate(cls?.endingDate!)}
                />
              </ListItem>
              {/* Ending date */}
              <ListItem>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary="Zoom Link" secondary={cls?.zoomLink} />
              </ListItem>
              {/* Zoom link */}
            </List>
          </GridDiv>
          <MultilineListItem>
            <ListItemIcon>
              <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText
              primary="Additional Details"
              secondary={cls?.additionalDetails}
            />
          </MultilineListItem>
          {/* Additional Details */}
        </Loading>
      </Wrapper>
      <Wrapper width="80%">
        <Center>
          <TitleWrapper>
            <H1 color={"#2c6e3c"}>Students In Class</H1>
          </TitleWrapper>
        </Center>
        <br />
        <Loading loading={loading} size={30}>
          {cls?.Students!.map((student: Omit<IStudent, "Class">) => (
            <Accordion key={student.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions2-content"
                id="additional-actions2-header"
              >
                <PersonIcon />
                <Typography className={classes.heading}>
                  {student.firstName} {student.lastName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Name"
                      secondary={student.firstName + " " + student.lastName}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Email" secondary={student.email} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Phone Number"
                      secondary={student.phone}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <DialpadIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="ID Number"
                      secondary={student.idNumber}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <DateRangeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Age" secondary={student.age} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BusinessIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Address"
                      secondary={student.address}
                    />
                  </ListItem>
                  {student.additionalDetails && (
                    <ListItem>
                      <ListItemIcon>
                        <SubjectIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Additional Details"
                        secondary={student.additionalDetails}
                      />
                    </ListItem>
                  )}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
          {/* <br />
          <Center>
          </Center> */}
        </Loading>
      </Wrapper>
    </>
  );
}

export default SingleClass;
