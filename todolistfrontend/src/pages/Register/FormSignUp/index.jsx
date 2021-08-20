import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  FormContainerRight,
  Form,
  FormInputsContainer,
  FormLable,
  FormInput,
  FormInputBtn,
  FormSpan,
} from '../../FormElemetsStyles';

const FormSignUp = ({ submitForm }) => {
  const schema = yup.object().shape({
    email: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormContainerRight>
      <Form onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your account by filling out the
          information below
        </h1>
        <FormInputsContainer>
          <FormLable htmlFor='email'>Email</FormLable>
          <FormInput
            {...register('password')}
            id='email'
            type='email'
            name='email'
            placeholder='Enter your Email'
          />
          <p>{errors.email}</p>
        </FormInputsContainer>
        <FormInputsContainer>
          <FormLable htmlFor='username'>UserName</FormLable>
          <FormInput
            {...register('password')}
            id='username'
            type='text'
            name='username'
            placeholder='Enter your UserName'
          />
          <p>{errors.username}</p>
        </FormInputsContainer>
        <FormInputsContainer>
          <FormLable htmlFor='password'>Password</FormLable>
          <FormInput
            {...register('password')}
            id='password'
            type='password'
            name='password'
            placeholder='Enter your password'
          />
          <p>{errors.password}</p>
        </FormInputsContainer>
        <FormInputsContainer>
          <FormLable htmlFor='password2'>Confirm Password</FormLable>
          <FormInput
            {...register('password')}
            id='password2'
            type='password'
            name='password2'
            placeholder='Enter your password again'
          />
          <p>{errors.password2}</p>
        </FormInputsContainer>
        <FormInputBtn type='submit'>Sign Up</FormInputBtn>
        <FormSpan>
          Already have an accont? Login{' '}
          <a href='http://localhost:3000/login'>here</a>
        </FormSpan>
      </Form>
    </FormContainerRight>
  );
};

export default FormSignUp;
