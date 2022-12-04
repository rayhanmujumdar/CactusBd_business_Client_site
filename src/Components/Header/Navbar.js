import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="bg-gray-900">
      <nav className="flex container mx-auto gap-x-5 py-3  text-white">
        <div className="w-52">
          <Link to="/home">
            <img
              src="../../utils/cactusbd_logo.png"
              alt=""
              className="w-48 h-14"
            />
          </Link>
        </div>
        <ul className="flex gap-x-3 justify-center items-center py-2">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">About</Link>
          </li>
          <li className="service">
            <Link to="/home">
              Service
              <ul className="absolute bg-gray-900 p-3 rounded-md hidden whitespace-nowrap">
                <li className="py-0.5 px-1 text-lg hover:bg-gray-400 rounded-sm">
                  Event Management
                </li>
                <li className="py-0.5 px-1 text-lg hover:bg-gray-400 rounded-sm">
                  Digital Printing
                </li>
                <li className="py-0.5 px-1 text-lg hover:bg-gray-400 rounded-sm">
                  Supply
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to="/home">Blog</Link>
          </li>
          <li>
            <Link to="/home">Client</Link>
          </li>
          <li>
            <Link to="/home">Job circulation</Link>
          </li>
          <li>
            <Link to="/home">Contact</Link>
          </li>
          <li>
            <Link to="/home">Career opportunities</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
