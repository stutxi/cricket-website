import React, { useState } from 'react';
import Button from './Button';

const Stage2 = ({ nextStage, prevStage }) => {
  const [formData, setFormData] = useState({ age: '', gender: '' });

  const handleNext = (e) => {
    e.preventDefault();
    nextStage();
  };

  return (
    <form onSubmit={handleNext}>
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        className="border p-2 mb-4 w-full"
        required
      />
      <select
        name="gender"
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        className="border p-2 mb-4 w-full"
        required
      >
        <option value="" disabled>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div className="flex justify-between">
        <Button label="Back" onClick={prevStage} />
        <Button label="Next" type="submit" />
      </div>
    </form>
  );
};

export default Stage2;
