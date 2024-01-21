
import React, { createContext, useContext, useState } from 'react';

const MuteContext = createContext();

export const MuteProvider = ({ children }) => {
  const [globalMuted, setGlobalMuted] = useState(true);

  const toggleGlobalMute = () => {
    setGlobalMuted((prev) => !prev);
  };

  return (
    <MuteContext.Provider value={{ globalMuted, toggleGlobalMute }}>
      {children}
    </MuteContext.Provider>
  );
};

export const useMute = () => {
  return useContext(MuteContext);
};
