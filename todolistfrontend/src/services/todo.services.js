import axios from 'axios';
import { API_URL } from '../constants'
import { GetToken } from './storage.services'

const ApiUrl = `${API_URL}/ToDoes`;

axios.interceptors.request.use(
   (config) => {
    const token = GetToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const addToDo = async (todo) => {
  try {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const res = await axios.post(ApiUrl, { toDoName: todo.text });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const removeToDo = async (id) => {
  try {
    const res = await axios.delete(`${ApiUrl}/${id}`);
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateToDo = async (todo) => {
  try {
    await axios.put(`${ApiUrl}/${todo.id}`, {
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
    const res = await axios.get(ApiUrl);
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};
