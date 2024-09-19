import React, { useState } from 'react';
import Button from './Button'; // Import your Button component
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setEmail('');
    setMessage('');
  };

  return (
    <footer id='footer' className="bg-gray-100 py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {isSent ? (
        <p className="text-green-600">Your message has been sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <label htmlFor="email" className="block text-left mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-black py-2 px-4 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-left mb-1">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-2 border-black py-2 px-4 w-full"
              rows="4"
              required
            />
          </div>
          <Button label="Send Message" type="submit" />
        </form>
      )}

      {/* Black stripe */}
      <div className="bg-black text-white py-2 mt-8">
        <p className="mb-1">© 2024 XYZ Cricket. All rights reserved.</p>
        <p className="mb-1">123 Cricket Lane, City, Country</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white hover:text-gray-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
