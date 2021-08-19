import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import '../../../components/Form.css'

const FormSignUp = ({ submitForm }) => {
  const schema = yup.object().shape({
    email: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, handleChange, values, handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your account by filling out the
          information below
        </h1>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
          {...register('password')}
            id='email'
            type='email'
            name='email'
            className='form-input'
            placeholder='Enter your Email'
          />
        <p>{errors.email}</p>
        </div>
        <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>
            UserName
          </label>
          <input
          {...register('password')}
            id='username'
            type='text'
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
        <div className='form-inputs'>
          <label htmlFor='password2' className='form-label'>
            Confirm Password
          </label>
          <input
                    {...register('password')}
            id='password2'
            type='password'
            name='password2'
            className='form-input'
            placeholder='Enter your password again'
          />
                   <p>{errors.password2}</p>
        </div>
        <button className='form-input-btn'
         type='submit'>
             Sign Up
        </button>
        <span className='form-input-login'>
          Already have an accont? Login <a href='http://localhost:3000/login'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignUp;
