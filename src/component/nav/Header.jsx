import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Nav from './Nav';
import NavItem from './NavItem';
import ButtonSimple from '../button/ButtonSimple';

import PathConstants from '../../routing/paths';
import { doSignOut } from '../../config/auth';

const Header = () => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {userLoggedIn ? (
        <Nav
          buttons={
            <ButtonSimple
              onClick={() => {
                doSignOut().then(() => {
                  navigate('/');
                });
              }}
            >
              Logout
            </ButtonSimple>
          }
        >
          <NavItem linkTo={PathConstants.TRANSACTION_NEW}>Add trade</NavItem>
          <NavItem linkTo={PathConstants.HOME}>Portfolio</NavItem>
        </Nav>
      ) : (
        <Nav
          buttons={
            <>
              <ButtonSimple onClick={() => navigate(PathConstants.LOGIN)}>Sign In</ButtonSimple>
            </>
          }
        ></Nav>
      )}
    </>
  );
};

export default Header;
