import React from 'react';
import styled from 'styled-components';
import MenuIcon from '../icon/MenuIcon';
import PathConstants from '../../routing/paths';
import { Link } from 'react-router-dom';

const Nav = ({ buttons, children }) => {
  return (
    <NavContainer>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <LogoContainer to={PathConstants.HOME}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} className="h-8" alt="home icon" />
        </LogoContainer>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ButtonContainer>{buttons}</ButtonContainer>
          <MenuToggle>
            <span className="sr-only">Open main menu</span>
            <MenuIcon />
          </MenuToggle>
        </div>
        <DesktopMenuContainer>
          <ul className="flex space-x-6">{children}</ul>
        </DesktopMenuContainer>
      </div>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav.attrs({
  className: 'bg-zinc-50 fixed w-full z-20 top-0 start-0 border-b border-gray-200',
})``;

const MenuToggle = styled.button.attrs({
  className:
    'inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
  'aria-controls': 'navbar-sticky',
  'aria-expanded': 'false',
  'data-collapse-toggle': 'navbar-sticky',
  type: 'button',
})``;

const LogoContainer = styled(Link).attrs({
  className: 'flex items-center space-x-3 rtl:space-x-reverse',
})``;

const DesktopMenuContainer = styled.div.attrs({
  className: 'items-center justify-between hidden w-full md:flex md:w-auto md:order-1',
  id: 'navbar-sticky',
})``;

const ButtonContainer = styled.span.attrs({
  className: 'flex space-x-2',
})``;
