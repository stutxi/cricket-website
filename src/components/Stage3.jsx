import React, { useState } from 'react';
import Button from './Button';

const Stage3 = ({ prevStage }) => {
  const [formData, setFormData] = useState({ phone: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="border p-2 mb-4 w-full"
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="border p-2 mb-4 w-full"
        required
      />
      <div className="flex justify-between">
        <Button label="Back" onClick={prevStage} />
        <Button label="Submit" type="submit" />
      </div>
    </form>
  );
};

export default Stage3;
