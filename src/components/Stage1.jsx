import React, { useState } from 'react';
import Button from './Button';

const Stage1 = ({ nextStage }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleNext = (e) => {
    e.preventDefault(); // Prevent default form submission
    nextStage(); // Move to the next stage
  };

  return (
    <form onSubmit={handleNext}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-2 mb-4 w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border p-2 mb-4 w-full"
        required
      />
      <Button label="Next" type="submit" />
    </form>
  );
};

export default Stage1;
