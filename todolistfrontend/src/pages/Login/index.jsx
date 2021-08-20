import React from 'react';
import FormSignIn from './FormSignIn';
import {
  FormContainer,
  CloseBtn,
  FormContainerLeft,
  FormImg,
} from '../FormElemetsStyles';

const Login = () => {
  return (
    <>
      <FormContainer>
        <CloseBtn>x</CloseBtn>
        <FormContainerLeft>
          <FormImg src='img/img-2.png' alt='spaceship' />
        </FormContainerLeft>
        <FormSignIn />
      </FormContainer>
    </>
  );
};

export default Login;
