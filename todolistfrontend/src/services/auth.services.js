import axios from 'axios';
import { API_URL } from '../constants';

export const submitRegistration = async ({ values }) => {
  await axios.post(`${API_URL}/Auth/register`, {
    email: values.email,
    username: values.username,
    password: values.password,
    confirmPassword: values.password2,
  });
};

export const submitLogin = async (props) => {
  await axios.post(`${API_URL}/Auth/login`, {
    username: props.username,
    password: props.password,
  });
};
