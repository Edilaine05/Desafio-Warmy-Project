import React, { useContext } from 'react';
import { TaskContext} from "../../Context/TaskContext/TaskContext";
import {CompletedTasksCountContainer  } from "./styles";

const CompletedTasksCount = () => {
  const { tasks } = useContext(TaskContext);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <CompletedTasksCountContainer className="pulsate">
      <p>Tarefas Completas: {completedTasks.length}</p>
    </CompletedTasksCountContainer>
  );
};
export default CompletedTasksCount;