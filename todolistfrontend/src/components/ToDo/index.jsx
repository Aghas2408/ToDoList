import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { ToDoContainer, IconContainer, CheckboxContainer } from './styles';

const ToDo = ({ todos, removeToDo, updateToDo }) => {
  return todos.map((todo, index) => (
    <ToDoContainer key={index}>
      <CheckboxContainer>
        <input
          type='checkbox'
          onChange={() => updateToDo(todo)}
          checked={todo.checked}
        />
      </CheckboxContainer>
      <div key={todo.id}>
        {todo.checked ? <del>{todo.toDoName}</del> : todo.toDoName}
      </div>
      <IconContainer>
        <RiCloseCircleLine
          onClick={() => removeToDo(todo.id)}
          style={{ marginRight: 5, color: 'white' }}
        />
      </IconContainer>
    </ToDoContainer>
  ));
};

export default ToDo;
