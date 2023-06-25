import React, { useState, useContext } from 'react';
import { Form, Input, Button } from './styles';
import { TaskContext } from '../../Context/TaskContext/TaskContext';

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Digite uma nova tarefa..."
      />
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};

export default TaskForm;