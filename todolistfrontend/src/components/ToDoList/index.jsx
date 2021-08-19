import React, { useState, useEffect } from 'react';
import {
  getToDos,
  addToDo,
  removeToDo,
  updateToDo,
} from '../../services/todo.services';
import ToDoForm from '../ToDoForm';
import ToDo from '../ToDo';

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
    const newToDos = todos.map((item) => {
      if (data === item.id) return { ...item, checked: !item.checked };
      return item;
    });
    setTodos(newToDos);
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
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
