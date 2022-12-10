import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/pages/Home/Home.jsx";
import Job_circulation from "./Components/pages/Job_circulation/Job_circulation"
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init();
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/job_circulation" element={<Job_circulation></Job_circulation>}></Route>
      </Routes>
    </div>
  );
}

export default App;
