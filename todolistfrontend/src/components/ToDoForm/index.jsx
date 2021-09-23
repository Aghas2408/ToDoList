import React, { useState } from 'react';
import { FormContainer, InputContainer, ToDoButton } from './styles';

const ToDoForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    onSubmit({
      text: input,
    });
    setInput('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer
        type='text'
        placeholder='Add a todo'
        value={input}
        name='text'
        onChange={handleChange}
      />
      <ToDoButton>Add</ToDoButton>
    </FormContainer>
  );
};

export default ToDoForm;
