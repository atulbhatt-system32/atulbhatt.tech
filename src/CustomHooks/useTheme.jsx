import { useState } from "react";
import { themeUtils } from "../Utils";

export default function useTheme() {
  const [theme, setTheme] = useState(themeUtils.getTheme());

  function toggleTheme() {
    let currentTheme = themeUtils.toggleTheme();
    setTheme(currentTheme);
  }

  function changeTheme(theme) {
    let currentTheme = themeUtils.setTheme(theme);
    setTheme(currentTheme);
  }
  return { theme, changeTheme, toggleTheme };
}
