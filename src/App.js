import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/pages/Home/Home.jsx";
import Job_circulation from "./Components/pages/Job_circulation/Job_circulation";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Components/pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import About from "./Components/pages/About/About";

function App() {
  AOS.init({
    duration: 500,
    delay: 100
  });
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/job_circulation"
          element={<Job_circulation></Job_circulation>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
