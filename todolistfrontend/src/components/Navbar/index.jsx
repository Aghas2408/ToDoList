import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { ROUTES } from '../../constants'; 
import {
  NavLink,
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  LogoImg,
} from './styles';


const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Nav>
      <NavLink to={ROUTES.HOME}>
        <LogoImg src='img/logo.png' />
      </NavLink>
      <Bars />
      {isAuthenticated ? (
        <NavMenu>
          <NavBtn>
            <NavBtnLink onClick={logout} to={ROUTES.LOGIN}>
              Log Out
            </NavBtnLink>
          </NavBtn>
        </NavMenu>
      ) : (
        <NavMenu>
          <NavBtn>
            <NavBtnLink to={ROUTES.REGISTER}>Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to={ROUTES.LOGIN}>Sign In</NavBtnLink>
          </NavBtn>
        </NavMenu>
      )}
    </Nav>
  );
};

export default Navbar;
