import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  MenuItem,
  Badge,
  Menu as MainMenu,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  Menu,
  FiberNew,
  NotificationsActive,
  Notifications,
} from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SignOutButton from "./auth/SignOutButton";
import styled from "styled-components";
import { StyledLink } from "../styles/styledComponents";
import SchoolIcon from "@material-ui/icons/School";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TodayIcon from "@material-ui/icons/Today";
import QuizIcon from "@material-ui/icons/ListAlt";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import StreetviewIcon from "@material-ui/icons/Streetview";
import { AuthContext } from "../helpers";
import { ThemeContext } from "../helpers";
//@ts-ignore
import DarkModeToggle from "react-dark-mode-toggle";
import "./classroomNavBar.css";

function ClassRoomNavBar() {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  };
  //@ts-ignore
  const { user } = useContext(AuthContext);
  //@ts-ignore
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeTheme = () => {
    const isDark = currentTheme === "dark";
    if (isDark) {
      setCurrentTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setCurrentTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div>
      {/* top bar    background: "#202124",
    sideBar: "#18191b", */}
      {/* //todo add my color somehow */}
      <AppBar
        position="static"
        // style={{ backgroundColor: currentTheme === "dark" && "#18191b" }}
      >
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            color="inherit"
            edge="start"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h4"
            style={{
              marginRight: 15,
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            Classroom
          </Typography>
          <DarkModeToggle
            onChange={handleChangeTheme}
            checked={currentTheme === "dark"}
            size={50}
          />
          <Typography
            variant="h6"
            style={{
              display: "flex",
              position: "absolute",
              right: 10,
              marginRight: 10,
            }}
          >
            <>
              <IconButton
                onClick={handleClick}
                color="inherit"
                style={{ color: "red", marginRight: 10 }}
              >
                <Badge color="secondary" badgeContent={10}>
                  <Notifications style={{ marginRight: 10, color: "white" }} />
                </Badge>
              </IconButton>
              <StyledMenu
                //@ts-ignore
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              ></StyledMenu>
            </>

            <AccountCircleIcon
              style={{
                marginRight: 10,
                marginTop: "auto",
                marginBottom: "auto",
              }}
            />
            {user.firstName + " " + user.lastName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <StyledDrawer>
          <StyledLink to="/">
            <DrawerItem onClick={() => setOpen(false)}>
              Dashboard
              <DashboardIcon style={{ position: "absolute", right: 10 }} />
            </DrawerItem>
          </StyledLink>
          <StyledLink to="/lessons">
            <DrawerItem onClick={() => setOpen(false)}>
              Lessons
              <SchoolIcon style={{ position: "absolute", right: 10 }} />
            </DrawerItem>
          </StyledLink>
          <StyledLink to="/quizme">
            <DrawerItem onClick={() => setOpen(false)}>
              QuizMe
              <QuizIcon style={{ position: "absolute", right: 10 }} />
            </DrawerItem>
          </StyledLink>
          <StyledLink to="/schedhule">
            <DrawerItem onClick={() => setOpen(false)}>
              Schedhule
              <TodayIcon style={{ position: "absolute", right: 10 }} />
            </DrawerItem>
          </StyledLink>
          {user.userType == "student" && (
            <StyledLink to="/tasks">
              <DrawerItem onClick={() => setOpen(false)}>
                Tasks
                <AssignmentLateIcon
                  style={{ position: "absolute", right: 10 }}
                />
              </DrawerItem>
            </StyledLink>
          )}

          {/* {user.userType == "teacher" && (
            <StyledLink to='/teacher'>
              <DrawerItem onClick={() => setOpen(false)}>
                Teacher
                <StreetviewIcon style={{ position: "absolute", right: 10 }} />
              </DrawerItem>
            </StyledLink>
          )} */}
          <DrawerItem style={{ alignContent: "flex-end" }}>
            <SignOutButton style={{ position: "absolute", right: 10 }} />
          </DrawerItem>
        </StyledDrawer>
      </Drawer>
    </div>
  );
}

export default ClassRoomNavBar;

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  //@ts-ignore
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "right",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const OneNotification = styled.div`
  width: 310px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const DrawerItem = styled.div`
  padding: 25px;
  color: white;
  width: 100%;
  height: 1.5em;
  transition: 100ms;

  &:hover {
    color: #b33357;
    background-color: white;
    cursor: pointer;
  }
`;

const StyledDrawer = styled.div`
  background-color: ${({ theme }: { theme: any }) => theme.colors.sideBar};
  /* background-color: #3f51b5; */
  /* background-image:url('../media/scaleup.jpeg'); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 220px;
  overflow: hidden;
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }: { theme: any }) =>
    theme.colors.sidebar}; //TODO change
  width: 100%;
`;
