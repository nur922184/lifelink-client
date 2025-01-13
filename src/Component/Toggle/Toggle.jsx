import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const Toggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light" // Default to light theme
      );
    
      // Toggle theme and save to localStorage
      const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
      };
    
      // Apply theme class to the root element
      useEffect(() => {
        const rootElement = document.documentElement;
        if (theme === "dark") {
          rootElement.classList.add("dark");
        } else {
          rootElement.classList.remove("dark");
        }
      }, [theme]);
    return (
        <div>
             <button
            onClick={toggleTheme}
            className="p-2 rounded-full ml-6 bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors duration-300"
          >
            {theme === "light" ? <BsMoon size={18} /> : <BsSun size={18} />}
          </button>
        </div>
    );
};

export default Toggle;