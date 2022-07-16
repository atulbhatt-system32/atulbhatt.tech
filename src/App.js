import { Home, AboutUs, Blogs } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./static.db";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={routes.home.path} element={<Home />} />
          <Route path={routes.aboutMe.path} element={<AboutUs />} />
          <Route path={routes.content.path} element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
