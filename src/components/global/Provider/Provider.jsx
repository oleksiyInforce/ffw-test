import React, { createContext, useState } from 'react';

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState('video');

  return <StepContext.Provider value={{ step, setStep }}>{children}</StepContext.Provider>;
};

export const useStep = () => {
  const context = React.useContext(StepContext);
  if (context === undefined) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};
