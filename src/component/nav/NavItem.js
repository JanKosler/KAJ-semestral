import { Link } from 'react-router-dom';

const NavItem = ({ linkTo, isActive, children }) => {
  return (
    <li>
      <Link
        to={linkTo}
        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
