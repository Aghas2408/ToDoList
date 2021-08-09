import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoForm from '../ToDoForm';
import ToDo from '../ToDo';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [deleteArr, setArr] = useState([]);

  const addToDo = async (todo) => {
    try {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
      const res = await axios.post('https://localhost:5001/api/ToDoes', {
        toDoName: todo.text,
      });
      if (!res) return;
      const newTodos = [...todos];
      newTodos.push({ toDoName: todo.text });
      setTodos(newTodos);
    } catch (e) {
      console.log(e);
    }
  };

  const removeToDo = () => {
    try {
      debugger;
      deleteArr.forEach(async (d) => {
        await axios.delete(`https://localhost:5001/api/ToDoes/${d.id}`);
        const removeArr = [...todos].filter((todo) => todo.id !== d.id);
        setTodos(removeArr);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updateToDo = async (todo) => {
    try {
      await axios.put(`https://localhost:5001/api/ToDoes/${todo.id}`, {
        id: todo.id,
        toDoName: todo.toDoName,
        checked: !todo.checked,
      });
      const newToDos = todos.map((item) => {
        if (todo.id === item.id) return { ...item, checked: !item.checked };
        return item;
      });
      setTodos(newToDos);
    } catch (e) {
      console.log(e);
    }
  };

  const getToDos = async () => {
    try {
      const res = await axios.get('https://localhost:5001/api/ToDoes');
      const data = res.data;
      setTodos(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getToDos();
  }, []);

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <ToDoForm onSubmit={addToDo} />
      <ToDo todos={todos} removeToDo={removeToDo} updateToDo={updateToDo} />
      {/* {todos.length
        ? todos.map((todo) => <div key={todo.id}>{todo.toDoName}</div>)
        : null} */}
    </div>
  );
};

export default ToDoList;
