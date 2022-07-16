import { Home, AboutUs, Content } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./static.db";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={routes.home.path} element={<Home />} />
          <Route path={routes.aboutMe.path} element={<AboutUs />} />
          <Route path={routes.content.path} element={<Content />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
