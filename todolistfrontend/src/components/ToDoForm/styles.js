import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const InputContainer = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #1ac4f9;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;
  ::placeholder {
    color: #e2e2e2;
  }
`;

export const ToDoButton = styled.button`
    padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background-color: #1AC4F9;
  color: rgb(0, 0, 0);
  text-transform: capitalize;
`