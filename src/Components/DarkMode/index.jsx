import React from "react";
import "./DarkMode.css";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../App";
const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  // themeUtils.setTheme("dark");
}

const DarkMode = () => {
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme flex" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
          className="dark_mode_checkbox"
        />
        <MdDarkMode className="cursor-pointer" />
      </label>
    </div>
  );
};

export default DarkMode;
