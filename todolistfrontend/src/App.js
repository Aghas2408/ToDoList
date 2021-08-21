import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import ToDoList from './components/ToDoList';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/Auth';
import { GlobalStyle } from './globalStyles';
import { ROUTES } from './constants';

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <AuthContextProvider>
        <Navbar />
        <Switch>
          <Route exact path={ROUTES.REGISTER} component={Register}></Route>
          <Route exact path={ROUTES.LOGIN} component={Login}></Route>
          <ProtectedRoute exact path={ROUTES.HOME}  component={ToDoList} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
