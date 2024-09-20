import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { motion } from 'framer-motion';

const Navbar = ({ onRegisterClick }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md fixed w-full top-0 left-0 z-50 border-b-4 border-green-600">
      {/* Logo and Text */}
      <div className="flex items-center space-x-2">
        <img src="/cricket-fav.png" alt="XYZ Cricket Logo" className="h-10 w-10" />
        <div className="text-xl font-bold text-black">XYZ Cricket</div>
      </div>
      <ul className="flex space-x-6">
        <motion.li
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            className="text-black hover:text-green-600"
          >
            Home
          </Link>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <Link 
            to="features" 
            smooth={true} 
            duration={500} 
            className="text-black hover:text-green-600"
          >
            Features
          </Link>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <button
            onClick={onRegisterClick}
            className="text-black hover:text-green-600"
          >
            Register
          </button>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <Link 
            to="footer" 
            smooth={true} 
            duration={500} 
            className="text-black hover:text-green-600"
          >
            Contact
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
