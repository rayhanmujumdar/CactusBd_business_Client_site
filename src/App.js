import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/pages/Home";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
