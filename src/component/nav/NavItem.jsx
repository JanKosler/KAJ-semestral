import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
 * Navigation item component
 * @param {*} linkTo The link to navigate to
 * @param {boolean} isActive  The active state of the link
 * @param {*} children  The children to render
 * @returns  The NavItem component
 */
const NavItem = ({ linkTo, isActive, children }) => {
  return (
    <li>
      <NavLink to={linkTo}>{children}</NavLink>
    </li>
  );
};

export default NavItem;

const NavLink = styled(Link).attrs({
  className:
    'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0',
})``;
