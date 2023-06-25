import React, { useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext/TaskContext';
import TaskItem from '../TaskItem/index';

import { List } from './styles';

const TaskList = () => {
  const { tasks, addTask } = useContext(TaskContext);

  return (
    <div>
      <List>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    </div>
  );
};

export default TaskList;
