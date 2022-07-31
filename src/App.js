import { Home, AboutUs, Content, Skills } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./static.db";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={routes.home.path} element={<Home />} />
          <Route exact path={routes.aboutMe.path} element={<AboutUs />} />
          <Route exact path={routes.content.path} element={<Content />} />
          <Route exact path={routes.skills.path} element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
