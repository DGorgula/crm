import React, { useState, useEffect, useCallback, useContext } from "react";
import { ITask } from "../../../typescript/interfaces";
import { Loading } from "react-loading-wrapper";
import Swal from "sweetalert2";
import network from "../../../helpers/network";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../../helpers";
import styled from "styled-components";
import Task from "./Task";
import TaskTable from "./TaskTable";

export default function TaskBoard() {
  const [myTasks, setMyTasks] = useState<ITask[] | null>();
  const [loading, setLoading] = useState<boolean>(true);
  //@ts-ignore
  const { user } = useContext(AuthContext);

  const DashboardContainer = styled.div`
    background-color: ${({ theme }: { theme: any }) => theme.colors.background};
    width: 100%;
    height: 100vh;
  `;
  const Content = styled.div`
    color: ${({ theme }: { theme: any }) => theme.colors.font};
  `;

  const getMyTasks = async () => {
    try {
      const { data }: { data: ITask[] } = await network.get(
        `/api/v1/task/bystudentid/${user.id}`
      );
      setLoading(false);
      setMyTasks(data);
    } catch (error) {
      Swal.fire("Error Occurred", error.message, "error");
    }
  };

  useEffect(() => {
    try {
      getMyTasks();
    } catch (error) {
      Swal.fire("Error Occurred", error.message, "error");
    }
    //eslint-disable-next-line
  }, []);
  return (
    <DashboardContainer>
      <Content>
        {/* <Task myTasks={myTasks} /> */}
        <TaskTable myTasks={myTasks} />
      </Content>
    </DashboardContainer>
  );
}
