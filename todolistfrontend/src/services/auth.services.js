import axios from 'axios';
import { API_URL } from '../constants';

const ApiUrl = `${API_URL}/Auth`

export const signUp = async ({ values }) => {
  await axios.post(`${ApiUrl}/register`, {
    email: values.email,
    username: values.username,
    password: values.password,
    confirmPassword: values.password2,
  });
};

export const signIn = async (props) => {
  await axios.post(`${ApiUrl}/login`, {
    username: props.username,
    password: props.password,
  });
};
