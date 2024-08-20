import { createContext } from "react";

const initialState = {
  currentTheme: "dark",
  changeCurrentTheme: (_newTheme: "light" | "dark") => {},
};

const ThemeContext = createContext(initialState);

export default ThemeContext;
