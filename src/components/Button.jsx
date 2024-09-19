import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      className="border-2 border-black bg-white text-black py-2 px-4 shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-200 ease-in-out hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]"
      onClick={onClick}
      style={{ width: 'auto' }}
    >
      {label}
    </button>
  );
};

export default Button;
