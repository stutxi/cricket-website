import React from 'react';
import BallStumpsModel from './BallStumpsModel'; 
import Button from './Button'; 

const Hero = ({ onRegisterClick }) => {
  return (
    <section id="hero" className="relative h-screen bg-[url('/images/cricket-stadium-1.jpg')] bg-cover bg-center flex items-center justify-between px-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white p-6 flex flex-col justify-center h-full max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold animate__animated animate__fadeInDown">Welcome to XYZ Cricket Tournaments</h1>
        <p className="mt-2 text-lg animate__animated animate__fadeIn animate__delay-1s">Join us for exciting cricket tournaments and showcase your talent!</p>
        <br />
        <Button label="Register Now" onClick={onRegisterClick} />
      </div>

      {/* 3D Model on the Right */}
      <div className="relative z-10 w-[30%] h-[80%] pr-10">
        <BallStumpsModel />
      </div>
    </section>
  );
};

export default Hero;
