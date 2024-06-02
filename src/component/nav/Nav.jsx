import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '../icon/MenuIcon';
import PathConstants from '../../routing/paths';
import { Link } from 'react-router-dom';

/**
 * Navigation bar component
 * @param {*} buttons  The buttons to render
 * @param {*} children  The children to render
 * @returns The Nav component
 */
const Nav = ({ buttons, children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  return (
    <HeaderContainer>
      <NavWrapper>
        <LogoSection to={PathConstants.HOME}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Home Icon" className="h-8" />
        </LogoSection>
        <ControlsSection>
          <ButtonContainer>{buttons}</ButtonContainer>
          <MenuButton onClick={toggleMenu}>
            <span className="sr-only">Toggle navigation</span>
            <MenuIcon />
          </MenuButton>
        </ControlsSection>
        {/* Conditional rendering based on isMenuOpen state */}
        <NavigationLinks display={isMenuOpen ? 'flex' : 'hidden'}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-6">{children}</ul>
        </NavigationLinks>
      </NavWrapper>
    </HeaderContainer>
  );
};

export default Nav;

const HeaderContainer = styled.div.attrs({
  className: 'bg-zinc-50 fixed w-full z-20 top-0 start-0 border-b border-gray-200',
})``;

const NavWrapper = styled.nav.attrs({
  className: 'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4',
})``;

const LogoSection = styled(Link).attrs({
  className: 'flex items-center space-x-3 rtl:space-x-reverse',
})``;

const ControlsSection = styled.div.attrs({
  className: 'flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse',
})``;

const MenuButton = styled.button.attrs({
  className:
    'inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
  'data-collapse-toggle': 'navbar-sticky',
  type: 'button',
})``;

const ButtonContainer = styled.div.attrs({
  className: 'flex space-x-2',
})``;

/** Because validation error :) */
const StyledNavigationLinks = styled.div`
  transition: all 0.3s ease-in-out;
`;

const NavigationLinks = ({ display, children }) => {
  const className = `${display} items-center justify-between w-full md:flex md:w-auto md:order-1`;
  return <StyledNavigationLinks className={className}>{children}</StyledNavigationLinks>;
};
