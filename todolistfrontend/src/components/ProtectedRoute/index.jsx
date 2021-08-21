import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { GetToken } from '../../services/storage.services';

const ProtectedRoute = ({ component: Component, auth, ...restOfProps }) => {
  const token = GetToken();
  const [authenticated, setAuthenticated] = useState(token);

  return authenticated ? <Component /> : <Redirect to={ROUTES.LOGIN} />;
};

export default ProtectedRoute;
