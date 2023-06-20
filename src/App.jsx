import React from "react";
import { Home, AboutUs, Content, Skills, NotFound } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./static.db";
import { useTheme } from "./CustomHooks";
import "./styles/output.css";

const ThemeContext = React.createContext();

function App() {
  const { theme, changeTheme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={{ theme, changeTheme, toggleTheme }}>
        <Router>
          <Routes>
            <Route exact path={routes.home.path} element={<Home />} />
            <Route exact path={routes.aboutMe.path} element={<AboutUs />} />
            <Route exact path={routes.content.path} element={<Content />} />
            <Route exact path={routes.skills.path} element={<Skills />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
export { ThemeContext };
