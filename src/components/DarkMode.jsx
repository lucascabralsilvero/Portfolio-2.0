import React, {useState, useEffect} from "react";
import {BsMoonStarsFill, BsSunFill} from "react-icons/bs"



const DarkMode = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <button className="text-lg" onClick={handleThemeSwitch}> { theme === "dark" ? < BsSunFill/> : <BsMoonStarsFill /> }</button>;
};

export default DarkMode;
