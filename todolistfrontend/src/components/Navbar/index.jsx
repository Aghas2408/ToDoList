import React, { useContext } from 'react';
import { NavLink, Nav, Bars, NavMenu, NavBtn, NavBtnLink } from './styles';
import { AuthContext } from '../../context/Auth';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src='img/logo.png' width='50' height='50' />
        </NavLink>
        <Bars />
        {isAuthenticated ? (
          <NavMenu>
            <NavBtn>
              <NavBtnLink onClick={logout} to='/login'>
                Log Out
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        ) : (
          <NavMenu>
            <NavBtn>
              <NavBtnLink to='/register'>Sign Up</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
