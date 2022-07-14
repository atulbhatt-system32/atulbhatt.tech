import { Home, AboutUs, Blogs } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import Content from "./Pages/Content";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/content" element={<Content />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
