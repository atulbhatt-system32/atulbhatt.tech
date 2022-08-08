const getTheme = () => {
  let theme = localStorage.getItem("theme");
  if (theme) {
    return theme;
  } else {
    theme = document.documentElement.getAttribute("data-theme");
    if (theme) {
      return theme;
    }
    return "dark";
  }
};

const setTheme = (mode) => {
  let _mode = mode === "light" ? "light" : "dark";
  localStorage.setItem("theme", _mode);
  document.documentElement.setAttribute("data-theme", _mode);
};

const toggleTheme = () => {
  let theme = getTheme();
  let _mode = theme === "light" ? "dark" : "light";
  setTheme(_mode);
};

export const themUtils = { getTheme, setTheme, toggleTheme };
export default themUtils;
