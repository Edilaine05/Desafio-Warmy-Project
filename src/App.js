import React from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList/index.jsx';
import PendingTasksCount from './Components/PendingTasksCount';
import { GlobalStyle, Container, Title,BackgroundImage,CountersContainer } from './globalStyles';
import { TaskProvider } from './Context/TaskContext/TaskContext';
import CompletedTasksCount from './Components/CompletedTasksCount';
import Footer from './Components/Footer';

function App() {
  
  return (
    <TaskProvider>
      <GlobalStyle />
      <Container>
      <BackgroundImage />
        <Title>Lista de Tarefas</Title>
        <TaskForm />
        <TaskList />
      </Container>
      <CountersContainer>
        <PendingTasksCount />
        <CompletedTasksCount/>
      </CountersContainer>
     <Footer/>
    </TaskProvider>
  );
}

export default App;