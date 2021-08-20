import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import axios from 'axios';
import {
  FormContainer,
  CloseBtn,
  FormContainerLeft,
  FormImg,
} from '../FormElemetsStyles';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = async ({ values }) => {
    await axios.post('https://localhost:5001/api/Auth/register', {
      email: values.email,
      username: values.username,
      password: values.password,
      confirmPassword: values.password2,
    });
    setIsSubmitted(true);
  };

  return (
    <>
      <FormContainer>
        <CloseBtn>x</CloseBtn>
        <FormContainerLeft>
          <FormImg src='img/img-2.png' alt='spaceship' />
        </FormContainerLeft>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </FormContainer>
    </>
  );
};

export default Register;
