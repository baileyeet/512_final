// ThemeContext.js
import { createContext, useContext, useState } from 'react';
import style1 from "./theme.module.scss"

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('pink');
  const [bgColor, setBgColor] = useState("pink")

  const updateTheme = (newColor) => {
    //setTheme((prevTheme) => (prevTheme === 'light' ? 'yellow' : 'light'));
    setTheme(newColor);
    console.log("switching color to...");
    console.log(newColor);
  };

  const bodyBgColor = {
    background: theme === "yellow" ? "#FFE6BB" : theme === "blue" ? "#E4F1E5" : "#ffefec",
    margin: 0,
    minHeight: '100vh',
  }

  return (
    <body style = {bodyBgColor}>
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
    </body>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};