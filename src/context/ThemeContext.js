import { createContext } from "react";
import React, { useState } from "react";

const ThemeContext = createContext();
const initialTheme = JSON.parse(localStorage.getItem("theme")) || {
  theme: "light",
  status: false,
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme.theme);
  const [themeStatus, setThemeStatus] = useState(initialTheme.status);

  const handleTheme = (e) => {
    if (e.target.checked === false) {
      localStorage.setItem(
        "theme",
        JSON.stringify({ theme: "light", status: false })
      );

      setTheme("light");
      setThemeStatus(false);
    } else {
      localStorage.setItem(
        "theme",
        JSON.stringify({ theme: "dark", status: true })
      );

      setTheme("dark");
      setThemeStatus(true);
    }
  };

  const data = { themeStatus, theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
