import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling

const Navbar = ({ onRegisterClick }) => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="text-xl font-bold text-black">XYZ Cricket</div>
      <ul className="flex space-x-6">
        <li>
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            className="text-black hover:text-green-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="features" 
            smooth={true} 
            duration={500} 
            className="text-black hover:text-green-600"
          >
            Features
          </Link>
        </li>
        <li>
          <button
            onClick={onRegisterClick}
            className="text-black hover:text-green-600"
          >
            Register
          </button>
        </li>
        <li>
          <Link 
            to="footer" 
            smooth={true} 
            duration={500} 
            className="text-black hover:text-green-600"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
