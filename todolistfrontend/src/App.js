import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import ToDoList from './components/ToDoList';
import ProtectedRoute from './components/ProtectedRoute';
import React from 'react';
import { AuthContextProvider } from './context/Auth';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Switch>
          <Route exact path='/register' component={Register}></Route>
          <Route exact path='/login' component={Login}></Route>
          <ProtectedRoute exact path='/' component={ToDoList} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
