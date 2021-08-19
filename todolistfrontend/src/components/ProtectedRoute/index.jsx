import React, { useEffect, useState, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';

const ProtectedRoute = ({ component: Component, auth, ...restOfProps }) => {
  const token = localStorage.getItem('token');
  const { login } = useContext(AuthContext);
  const [authenticated, setAuthenticated] = useState(!!token);
  useEffect(() => {
    if (!token) return;

    setAuthenticated(true);
    login(token);
  },[]);


  return authenticated ?  <Component /> : <Redirect to='/login' />;
};

export default ProtectedRoute;
