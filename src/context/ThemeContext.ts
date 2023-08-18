import { createContext } from "react";

const initialState = {
  currentTheme: "light",
  changeCurrentTheme: (_newTheme: "light" | "dark") => {},
};

const ThemeContext = createContext(initialState);

export default ThemeContext;
