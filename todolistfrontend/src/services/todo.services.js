import axios from 'axios';

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

const API_URL = process.env.REACT_APP_API_URL || '';

export const addToDo = async (todo) => {
  try {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const res = await axios.post(`${API_URL}/ToDoes`, { toDoName: todo.text });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const removeToDo = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/ToDoes/${id}`);
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateToDo = async (todo) => {
  try {
    await axios.put(`${API_URL}/ToDoes/${todo.id}`, {
      id: todo.id,
      toDoName: todo.toDoName,
      checked: !todo.checked,
    });
    return todo.id;
  } catch (e) {
    console.log(e);
  }
};

export const getToDos = async () => {
  try {
    const res = await axios.get(`${API_URL}/ToDoes`);
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};
