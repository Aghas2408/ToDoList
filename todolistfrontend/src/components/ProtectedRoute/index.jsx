import React from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { getToken } from '../../services/storage.services';

const ProtectedRoute = ({ component: Component, auth}) => {
  const token = getToken();

  return token ? <Component /> : <Redirect to={ROUTES.LOGIN} />;
};

export default ProtectedRoute;
