import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthContext } from '../../../context/Auth';
import { signIn } from '../../../services/auth.services';
import {
  FormContainerRight,
  Form,
  FormInputsContainer,
  FormLable,
  FormInput,
  FormInputBtn,
} from '../../FormElemetsStyles';

const FormSignIn = () => {
  const { login } = useContext(AuthContext);

  const schema = yup.object().shape({
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

  const submitForm = async (props) => {
    const res = signIn(props.username, props.password);
    if (res && res.data) {
      const data = res.data;
      login(data.accessToken);
    }
  };

  return (
    <FormContainerRight>
      <Form onSubmit={handleSubmit(submitForm)}>
        <h1>Sign in to your account</h1>
        <FormInputsContainer>
          <FormLable htmlFor='username'>UserName</FormLable>
          <FormInput
            {...register('username')}
            id='username'
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
        <FormInputBtn className='form-input-btn' type='submit'>
          Sign In
        </FormInputBtn>
      </Form>
    </FormContainerRight>
  );
};

export default FormSignIn;
