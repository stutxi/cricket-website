import React, { useState } from 'react';
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';

const RegistrationForm = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const nextStage = () => setCurrentStage(currentStage + 1);
  const prevStage = () => setCurrentStage(currentStage - 1);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {currentStage === 1 && <Stage1 nextStage={nextStage} />}
      {currentStage === 2 && <Stage2 nextStage={nextStage} prevStage={prevStage} />}
      {currentStage === 3 && <Stage3 prevStage={prevStage} />}
    </div>
  );
};

export default RegistrationForm;
