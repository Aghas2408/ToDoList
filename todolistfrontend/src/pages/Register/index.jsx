import React, { useState, useContext } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import '../../components/Form.css';
import axios from 'axios';

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
      <div className='form-container'>
        <span className='close-btn'>x</span>
        <div className='form-content-left'>
          <img src='img/img-2.png' alt='spaceship' className='form-img' />
        </div>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Register;
