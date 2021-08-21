import httpClient from '../httpClient'
import { API_URL } from '../constants';

const ApiUrl = `${API_URL}/Auth`

export const signUp = async ({ values }) => {
  await httpClient.post(`${ApiUrl}/register`, {
    email: values.email,
    username: values.username,
    password: values.password,
    confirmPassword: values.password2,
  });
};

export const signIn = async (props) => {
  await httpClient.post(`${ApiUrl}/login`, {
    username: props.username,
    password: props.password,
  });
};
