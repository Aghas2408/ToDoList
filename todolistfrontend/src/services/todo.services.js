import httpClient from '../httpClient'
import { API_URL } from '../constants';


const ApiUrl = `${API_URL}/ToDoes`;

export const addToDo = async (todo) => {
  try {
    if (!todo.text) {
      return;
    }
    const res = await httpClient.post(ApiUrl, { toDoName: todo.text });
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const removeToDo = async (id) => {
  try {
    const res = await httpClient.delete(`${ApiUrl}/${id}`);
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateToDo = async (todo) => {
  try {
    await httpClient.put(`${ApiUrl}/${todo.id}`, {
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
    const res = await httpClient.get(ApiUrl);
    const data = res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};
