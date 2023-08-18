import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeSwitch = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
      }
      className="fixed right-5 top-5 z-30 rounded-full border border-[#000] border-opacity-40 bg-gray-50 bg-opacity-80 p-[.5rem] text-gray-900 shadow-lg backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-gray-50 dark:bg-[#331D2C] dark:text-gray-50"
    >
      {currentTheme === "light" ? (
        <MdOutlineLightMode />
      ) : (
        <MdOutlineModeNight />
      )}
    </button>
  );
};
export default ThemeSwitch;
