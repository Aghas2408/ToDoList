import axios from 'axios';
import { API_URL } from '../constants';

export const signUp = async ({ values }) => {
  await axios.post(`${API_URL}/Auth/register`, {
    email: values.email,
    username: values.username,
    password: values.password,
    confirmPassword: values.password2,
  });
};

export const signIn = async (props) => {
  await axios.post(`${API_URL}/Auth/login`, {
    username: props.username,
    password: props.password,
  });
};
