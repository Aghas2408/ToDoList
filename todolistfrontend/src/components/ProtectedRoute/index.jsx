import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, auth, ...restOfProps }) => {
  const token = localStorage.getItem('token');
  const [authenticated, setAuthenticated] = useState(token);

  return authenticated ? <Component /> : <Redirect to='/login' />;
};

export default ProtectedRoute;
