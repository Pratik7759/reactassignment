import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Screenshot from "./Screenshot";
import Navbar from "./Navbar";
// import Form from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/screenshot" element={<Screenshot />} />
          {/* <Route path="/home" element={<Navbar />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
<Route path="/"><Home /></Route>
export default App;
