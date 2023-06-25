import styled, { keyframes } from 'styled-components';

const pulsateAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
export const PendingTasksCountContainer = styled.p`
  font-size: 20px;
  color: darkblue;
  margin-top: 10px;
  &:hover {
    animation: ${pulsateAnimation} 1s infinite;
  }
`;