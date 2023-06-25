import React, { useContext } from 'react';
import { TaskContext} from "../../Context/TaskContext/TaskContext";
import {PendingTasksCountContainer  } from "./styles.js";

const PendingTasksCount = () => {
  const { tasks } = useContext(TaskContext);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <PendingTasksCountContainer className="pulsate">
      <p>Tarefas Pendentes: {pendingTasks.length}</p>
    </PendingTasksCountContainer>
  );
};
export default PendingTasksCount;