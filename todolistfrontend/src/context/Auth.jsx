import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getToken } from '../services/storage.services';
import { setToken } from '../services/storage.services';

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = getToken();

  useEffect(() => {
    if (!token) return;

    setIsAuthenticated(true);
    login(token);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    history.push('/');
  }, [isAuthenticated]);

  const history = useHistory();

  const login = (token) => {
    setToken(token);
    setIsAuthenticated(true);
    history.push('/');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
