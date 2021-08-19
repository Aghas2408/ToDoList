import React from 'react';
import '../../components/Form.css';
import FormSignIn from './FormSignIn';

const Login = () => {
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>x</span>
        <div className='form-content-left'>
          <img src='img/img-2.png' alt='spaceship' className='form-img' />
        </div>
        <FormSignIn />
      </div>
    </>
  );
};

export default Login;
