// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Create the context
// const ScrollContext = createContext();

// // Create a provider component
// export const ScrollProvider = ({ children }) => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   useEffect(() => {
//     if (isPopupVisible) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   }, [isPopupVisible]);

//   return (
//     <ScrollContext.Provider value={{ isPopupVisible, setIsPopupVisible }}>
//       {children}
//     </ScrollContext.Provider>
//   );
// };

// // Custom hook to use the scroll context
// export const useScrollContext = () => useContext(ScrollContext);

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ScrollContext = createContext();

// Create a provider component
export const ScrollProvider = ({ children }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isPopupVisible]);

  return (
    <ScrollContext.Provider value={{ isPopupVisible, setIsPopupVisible }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use the scroll context
export const useScrollContext = () => useContext(ScrollContext);
