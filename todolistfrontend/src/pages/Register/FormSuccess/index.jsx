import React from 'react';
import {
  FormContainerRight,
  FormSuccessContainer,
  FormSuccessImage,
} from '../../FormElemetsStyles';

const FormSuccess = () => {
  return (
    <FormContainerRight>
      <FormSuccessContainer>
        We have received your request!
      </FormSuccessContainer>
      <FormSuccessImage src='img/img-3.svg' alt='success-image' />
    </FormContainerRight>
  );
};

export default FormSuccess;
