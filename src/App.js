import { Home, AboutUs } from "./Pages";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
