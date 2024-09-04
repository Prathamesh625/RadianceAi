import React, { createContext, useState } from 'react';

export const Theme = createContext(null);

export const ThemeContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const setThemeMode = () => {
    // setDarkMode(!darkMode?true:false)
  };

  console.log(darkMode);

  return (
    <Theme.Provider value={{ setThemeMode, darkMode }}>
      {children}
    </Theme.Provider>
  );
};
