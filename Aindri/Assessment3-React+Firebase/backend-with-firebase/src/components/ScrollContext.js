// src/ScrollContext.js
import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <ScrollContext.Provider value={{ isPopupVisible, setIsPopupVisible }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  return useContext(ScrollContext);
};
