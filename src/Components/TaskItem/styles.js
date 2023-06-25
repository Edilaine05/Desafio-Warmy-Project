import styled from 'styled-components';

export const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TaskText = styled.div`
  flex-grow: 1;
`;

export const TaskTitle = styled.span`

  color:${(props) => (props.completed ? '#54B435' :'#606C5D')};
  font-style:${(props) => (props.completed ? 'oblique' : 'normal')} ;
  
`;

export const DeleteButton = styled.button`
  margin-left: 10px;
  border-radius: 25px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #fa4848;
  }
`;