const NavItem = ({ href, isActive, children }) => {
    return (
        <li>
            <a href={href}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                {children}
            </a>
        </li>
    )
}

export default NavItem;