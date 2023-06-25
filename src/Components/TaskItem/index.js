import React, { useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext/TaskContext';
import {
  TaskItemContainer,
  TaskText,
  DeleteButton,
  TaskTitle,
} from './styles';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTaskComplete } = useContext(TaskContext);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleComplete = () => {
    toggleTaskComplete(task.id);
  };

  return (
    <TaskItemContainer completed={task.completed}>
      <input type="checkbox" checked={task.completed} onChange={handleToggleComplete} />
      <TaskText>
        <TaskTitle completed={task.completed}>{task.title}</TaskTitle>
      </TaskText>
      <DeleteButton onClick={handleDelete}>Deletar</DeleteButton>
    </TaskItemContainer>
  );
};

export default TaskItem;