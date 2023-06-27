import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dadosLS, setDadosLS] = useState({});

  return (
    <AppContext.Provider value={{ dadosLS, setDadosLS }}>
      {children}
    </AppContext.Provider>
  );
};
