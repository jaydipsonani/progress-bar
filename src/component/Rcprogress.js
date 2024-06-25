import React, { useEffect, useState } from 'react';
import { ProgressBar, Step } from 'react-step-progress';
import 'react-step-progress/dist/index.css';

const StepProgressExample = () => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prevStep => {
        const nextStep = prevStep + 1;
        if (nextStep >= steps.length) {
          clearInterval(interval);
        }
        return nextStep;
      });
    }, 1000); // Change step every 1 second

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div style={{ margin: '0 auto', padding: '20px', width: '90%' }}>
      <ProgressBar percent={(currentStep / steps.length) * 100}>
        {steps.map((label, index) => (
          <Step key={index} />
        ))}
      </ProgressBar>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Current Step: {currentStep + 1}</h2>
        <p>{steps[currentStep]}</p>
      </div>
    </div>
  );
};

export default StepProgressExample;
