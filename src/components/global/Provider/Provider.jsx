import React, { createContext, useState } from 'react';

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);

  return <StepContext.Provider value={{ isMuted, setIsMuted }}>{children}</StepContext.Provider>;
};

export const useStep = () => {
  const context = React.useContext(StepContext);
  if (context === undefined) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};
