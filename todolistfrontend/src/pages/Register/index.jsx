import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import { signUp } from '../../services/auth.services';
import {
  FormContainer,
  CloseBtn,
  FormContainerLeft,
  FormImg,
} from '../FormElemetsStyles';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = async ({ values }) => {
    await signUp({values});
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
