import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem('token');

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
    localStorage.setItem('token', token);
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
