import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Slider from './components/Slider';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer'; 

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <Navbar onRegisterClick={openModal} />
      <div id="hero">
        <Hero onRegisterClick={openModal} />
      </div>
      <div id="features">
        <Features />
      </div>
      <Slider />
      <Footer /> 

      {/* Modal for Registration */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black hover:text-red-600"
            >
              &#10005; {/* Close button */}
            </button>
            <RegistrationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
