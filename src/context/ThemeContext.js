import React, { useState } from 'react';

const initialState = 'light';

const ThemeContexProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContexProvider;
export const ThemeContext = React.createContext(initialState);
