import React from 'react';
import { motion } from 'framer-motion';
import BallStumpsModel from './BallStumpsModel';
import Button from './Button';

const Hero = ({ onRegisterClick }) => {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="hero" className="relative h-screen bg-[url('/images/cricket-stadium-1.jpg')] bg-cover bg-center flex items-center justify-between px-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white p-6 flex flex-col justify-center h-full max-w-2xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold" 
          initial="hidden" 
          animate="visible" 
          variants={textVariants}
        >
          Welcome to XYZ Cricket Tournaments
        </motion.h1>
        <motion.p 
          className="mt-2 text-lg" 
          initial="hidden" 
          animate="visible" 
          variants={textVariants}
          transition={{ delay: 1 }}
        >
          Join us for exciting cricket tournaments and showcase your talent!
        </motion.p>
        <br />
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={buttonVariants}
        >
          <Button label="Register Now" onClick={onRegisterClick} />
        </motion.div>
      </div>

      {/* 3D Model on the Right */}
      <div className="relative z-10 w-[30%] h-[80%] pr-10">
        <BallStumpsModel />
      </div>
    </section>
  );
};

export default Hero;
