import React, { useState, useEffect } from 'react';
import {
  getToDos,
  addToDo,
  removeToDo,
  updateToDo,
} from '../../services/todo.services';
import ToDoForm from '../ToDoForm';
import ToDo from '../ToDo';
import { HeaderContainer } from './styles';


const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const getTodoData = async () => {
    const data = await getToDos();
    if (data) setTodos(data);
  };

  const addToDoData = async (todo) => {
    const data = await addToDo(todo);
    const newTodos = [...todos];
    newTodos.push(data);
    setTodos(newTodos);
  };

  const removeToDoData = async (id) => {
    const data = await removeToDo(id);
    const removeArr = [...todos].filter((todo) => todo.id !== data);
    setTodos(removeArr);
  };

  const updateToDoData = async (todo) => {
    const data = await updateToDo(todo);
    const toDo = todos.find(item => item.id == data);
    todo.checked = !todo.checked;
    setTodos([...todos,toDo]);
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <div>
      <HeaderContainer>What's the Plan for Today?</HeaderContainer>
      <ToDoForm onSubmit={addToDoData} />
      <ToDo
        todos={todos}
        removeToDo={removeToDoData}
        updateToDo={updateToDoData}
      />
    </div>
  );
};

export default ToDoList;
