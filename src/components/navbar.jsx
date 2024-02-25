// Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Update the current page based on the current route
    const pathname = location.pathname.substring(1); // Remove the leading "/"
    setCurrentPage(pathname || 'Home');
  }, [location.pathname]);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handlePageChange = (page, route) => {
    setCurrentPage(page);
    setDropdownOpen(false);
    navigate(route);
  };

  return (
    <nav className="bg-gray-800 p-3 flex justify-between items-center rounded-b ">
      <div className="text-white">
        <Link to="/" className="text-2xl font-bold mb-10">
          My Components
        </Link>
      </div>
      <div className="relative inline-block text-left">
        <button
          onClick={handleDropdownToggle}
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-800 text-sm font-medium text-white focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
        >
          {currentPage}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {dropdownOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handlePageChange('Profile', '/profile')}
              >
                Profile
              </Link>
              <Link
                to="/background-changer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handlePageChange('Background Changer', '/background-changer')}
              >
                Background Changer
              </Link>
              <Link
                to="/Text-generator"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handlePageChange('Text Generator', '/Text-generator')}
              >
                Text Generator
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handlePageChange('Login', '/login')}
              >
                Login
              </Link>
              <Link
                to="/birthday"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handlePageChange('Birthday', '/birthday')}
              >
                Birthday
              </Link>
              {/* Add more pages as needed */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
