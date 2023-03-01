import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Screenshot from "./Screenshot";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/screenshot" element={<Screenshot />} />
          <Route path="/home" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
