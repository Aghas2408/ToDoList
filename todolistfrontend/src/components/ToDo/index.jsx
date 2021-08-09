import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const ToDo = ({ todos, removeToDo, updateToDo }) => {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div className='checkbox'>
        <input
          type='checkbox'
          onChange={() => updateToDo(todo)}
          checked={todo.checked}
        />
      </div>
      <div key={todo.id}>
        {todo.checked ? <del>{todo.toDoName}</del> : todo.toDoName}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeToDo()}
          className='delete-icon'
        />
      </div>
    </div>
  ));
};

export default ToDo;
