"use client";
import { MyContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { FiMoon, FiSun} from "react-icons/fi";


function ThemeToggle() {
  
  const contextValue = useContext(MyContext);
  if(!contextValue) return null;
  const {toggleTheme, theme}  = contextValue;
  return (
    <
    >
      {theme === "dark" 
      ? <FiMoon size={24} onClick={toggleTheme}
      className="cursor-pointer dark:text-darkModeText dark:hover:text-orange text-gray-700 hover:text-orange transition-colors"/> 
      : <FiSun size={24} onClick={toggleTheme}
      className="cursor-pointer dark:text-darkModeText dark:hover:text-orange text-gray-700 hover:text-orange transition-colors"/>}
    </>
  );
}

export default ThemeToggle;
