import React, { useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger and close icons

const Navbar = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md fixed w-full top-0 left-0 z-50 border-b-4 border-green-600">
      {/* Logo and Text */}
      <div className="flex items-center space-x-2">
        <img src="/cricket-fav.png" alt="XYZ Cricket Logo" className="h-10 w-10" />
        <div className="text-xl font-bold text-black">XYZ Cricket</div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navbar Links */}
      <ul
        className={`flex-col md:flex-row md:flex space-x-6 fixed md:relative inset-0 bg-white md:bg-transparent items-center justify-center transition-all duration-300 ${
          isOpen ? 'flex' : 'hidden'
        } md:space-x-6 md:p-0 p-10`}
      >
        {/* Close Icon for Mobile */}
        {isOpen && (
          <div className="absolute top-5 right-5 cursor-pointer" onClick={toggleMenu}>
            <FaTimes size={24} />
          </div>
        )}

        <li className="md:my-0 my-4">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-black hover:text-green-600 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className="md:my-0 my-4">
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="text-black hover:text-green-600 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
        </li>
        <li className="md:my-0 my-4">
          <button
            onClick={() => {
              onRegisterClick();
              setIsOpen(false);
            }}
            className="text-black hover:text-green-600"
          >
            Register
          </button>
        </li>
        <li className="md:my-0 my-4">
          <Link
            to="footer"
            smooth={true}
            duration={500}
            className="text-black hover:text-green-600 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
