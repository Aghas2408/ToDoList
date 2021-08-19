import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import ToDoList from './components/ToDoList';
import ProtectedRoute from './components/ProtectedRoute';
import React, { useContext } from 'react';
import { AuthContextProvider } from './context/Auth';
import { AuthContext } from './context/Auth';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/register' component={Register}></Route>
          <Route exact path='/login' component={Login}></Route>
          <ProtectedRoute exact path='/' component={ToDoList} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
