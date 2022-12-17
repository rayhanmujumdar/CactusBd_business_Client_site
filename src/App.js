import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/pages/Home/Home.jsx";
import Job_circulation from "./Components/pages/Job_circulation/Job_circulation";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Components/pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import About from "./Components/pages/About/About";
import NotFound from "./Components/pages/NotFound/NotFound";

function App() {
  AOS.init({
    duration: 500,
    delay: 100,
    throttleDelay: 50,
    debounceDelay: 30,
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
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
