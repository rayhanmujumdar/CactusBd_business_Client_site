import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars2Icon,XMarkIcon } from '@heroicons/react/24/solid'
import "./Navbar.css";

function Navbar() {
  const [nav,setNav] = useState(true)
  console.log(nav)
  return (
    <div className="bg-gray-900">
      <nav className="flex justify-between container mx-auto gap-x-5 py-3  text-white">
        <div onClick={() => setNav(!nav)} className="md:hidden p-4 ">
          {nav ? <Bars2Icon className="h-6 w-6"></Bars2Icon> : <XMarkIcon className="h-6 w-6"></XMarkIcon>}
        </div>
        <div className="w-52">
          <Link to="/">
            <img
              src="../../utils/cactusbd_logo.png"
              alt=""
              className="w-48 h-14"
            />
          </Link>
        </div>
        <ul className={`md:flex gap-x-3 justify-center items-center md:py-0 py-2 md:relative absolute z-30 md:bg-none bg-gray-900 p-10 rounded-md ml-1 ${nav ? " md:mt-0 mt-[-300px]" : "md:mt-0 mt-[69px]"} whitespace-nowrap duration-300`}>
          <li className="p-1 hover:bg-gray-400 duration-300 hover:duration-300 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="p-1 hover:bg-gray-400 hover:duration-300 rounded-md">
            <Link to="/home">About</Link>
          </li>
          <li className="service p-1 duration-300 hover:bg-gray-400 hover:duration-300 rounded-md hover:duration-500">
            <Link to="/home">
              Service
              <ul className="absolute bg-gray-900 p-3 rounded-md hidden whitespace-nowrap md:ml-6 ml-[130px] ">
                <li className="py-0.5 px-1 text-lg duration-300 hover:bg-gray-400 hover:duration-300 rounded-sm">
                  <Link to="/event_management">Event Management</Link>
                </li>
                <li className="py-0.5 px-1 text-lg duration-300 hover:bg-gray-400 rounded-sm">
                <Link to="/digital_printing">Digital Printing</Link>
                </li>
                <li className="py-0.5 px-1 text-lg duration-300 hover:bg-gray-400 rounded-sm">
                  <Link to="/supply">Supply</Link>
                </li>
                <li className="py-0.5 px-1 text-lg duration-300 hover:bg-gray-400 rounded-sm">
                  <Link to="/Interior&Exterior">Interior & Exterior</Link>
                </li>
                <li className="py-0.5 px-1 text-lg duration-300 hover:bg-gray-400 rounded-sm">
                  <Link to="/logistic">Logistic</Link>
                </li>
              </ul>
            </Link>
          </li>
          <li className="p-1 hover:bg-gray-400 duration-300 hover:duration-300 rounded-md">
            <Link to="/home">Blog</Link>
          </li>
          <li className="p-1 hover:bg-gray-400 duration-300 hover:duration-300 rounded-md">
            <Link to="/home">Client</Link>
          </li>
          <li className="p-1 hover:bg-gray-400 duration-300 hover:duration-300 rounded-md">
            <Link to="/job_circulation">Job circulation</Link>
          </li>
          <li className="p-1 hover:bg-gray-400 duration-300 hover:duration-300 rounded-md">
            <Link to="/home">Contact</Link>
          </li>
          <li className="p-1 hover:bg-gray-400 duration-300 hover:duration-300 rounded-md">
            <Link to="/home">Career opportunities</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
