import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import '../../../components/Form.css';
import { AuthContext } from '../../../context/Auth';

const FormSignIn = () => {
  const { login } = useContext(AuthContext);

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const submitForm = async (props) => {
    const res = await axios.post('https://localhost:5001/api/Auth/login', {
      username: props.username,
      password: props.password,
    });
    if (res && res.data) {
      const data = res.data;
      login(data.accessToken);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit(submitForm)}>
        <h1>Sign in to your account</h1>
        <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>
            UserName
          </label>
          <input
            {...register('username')}
            id='username'
            name='username'
            className='form-input'
            placeholder='Enter your UserName'
          />
          <p>{errors.username}</p>
        </div>

        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            {...register('password')}
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your password'
          />
          <p>{errors.password}</p>
        </div>
        <button className='form-input-btn' type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default FormSignIn;
