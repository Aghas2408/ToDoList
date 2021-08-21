import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { getToken } from '../../services/storage.services';

const ProtectedRoute = ({ component: Component, auth, ...restOfProps }) => {
  const token = getToken();
  const [authenticated, setAuthenticated] = useState(token);

  return authenticated ? <Component /> : <Redirect to={ROUTES.LOGIN} />;
};

export default ProtectedRoute;
