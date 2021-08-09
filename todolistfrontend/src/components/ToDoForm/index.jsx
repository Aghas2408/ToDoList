import React, { useState } from 'react';
import styled from 'styled-components';

const ToDoForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      text: input,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        type='text'
        placeholder='Add a todo'
        value={input}
        name='text'
        onChange={handleChange}
        className='todo-input edit'
      />
      <button className='todo-button'>Add</button>
    </form>
  );
};

export default ToDoForm;
