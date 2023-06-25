import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size:20px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #0056b3;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: #2686ed;
  }
`;