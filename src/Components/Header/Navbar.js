import React, { useEffect, useState } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import activeLink from "../utils_Func/activelink";

function Navbar() {
  const [nav, setNav] = useState(true);
  const [sticky, setSticky] = useState(false);
  const onScroll = () => {
    if (window.scrollY >= 200) {
      return setSticky(true);
    }
    return setSticky(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {!nav && (
        <div
          onClick={() => setNav(true)}
          className="md:hidden absolute bg-[rgba(0,0,0,0.5)] w-full min-h-max h-full z-20"
        ></div>
      )}
      <div className={`bg-white ${sticky && "sticky top-0 z-30"}`}>
        <nav
          className={` flex justify-between items-center container mx-auto gap-x-5 py-3  text-white`}
        >
          <div onClick={() => setNav(!nav)} className="md:hidden p-4 ">
            {nav && <Bars2Icon className="h-6 w-6 text-black"></Bars2Icon>}
          </div>
          <div className="lg:w-52 lg:block md:hidden block">
            <NavLink to="/">
              <img
                src="../../utils/cactusbd_logo.png"
                alt=""
                className="w-48 h-14"
              />
            </NavLink>
          </div>
          <ul
            className={`md:flex gap-x-3 justify-center items-center md:py-0 py-2 md:relative md:bg-white uppercase bg-gray-900 absolute z-50 md:bg-none md:text-black text-white p-10 font-semibold rounded-md ml-1 ${
              nav ? " md:mt-0 mt-[-700px]" : "md:mt-0 mt-[300px]"
            } whitespace-nowrap duration-400`}
          >
            <li
              onClick={() => setNav(true)}
              className="mb-5 mt-3 h-8 w-8 duration-300 hover:duration-300 rounded-md"
            >
              <XMarkIcon className="h-8 w-8 text-white border-2 border-white mb-5"></XMarkIcon>
            </li>
            <li className="p-1 hover:bg-[#051733] hover:text-white duration-300 hover:duration-300 rounded-md">
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li className="p-1 hover:bg-[#051733] hover:text-white hover:duration-300 rounded-md">
              <NavLink to="/about" className={activeLink}>
                About
              </NavLink>
            </li>
            <li className="service p-1 duration-300 hover:bg-[#051733] hover:text-white hover:duration-300 rounded-md cursor-pointer">
              Service
              <ul className="absolute uppercase bg-gray-900 p-3 rounded-md hidden whitespace-nowrap md:ml-6 ml-[130px] text-white">
                <li className="py-0.5 px-1 text-lg duration-300 hover:bg-[#051733] hover:text-white hover:duration-300 rounded-sm">
                  <NavLink to="/event_management" className={activeLink}>
                    Event Management
                  </NavLink>
                </li>
                <li className="py-0.5 px-1 text-lg duration-300 hover:bg-[#051733] hover:text-white rounded-sm">
                  <NavLink to="/digital_printing" className={activeLink}>
                    Digital Printing
                  </NavLink>
                </li>
                <li className="py-0.5 px-1 text-lg duration-300 hover:bg-[#051733] hover:text-white rounded-sm">
                  <NavLink to="/supply" className={activeLink}>
                    Supply
                  </NavLink>
                </li>
                <li className="py-0.5 px-1 text-lg duration-300 hover:bg-[#051733] hover:text-white rounded-sm">
                  <NavLink to="/Interior&Exterior" className={activeLink}>
                    Interior & Exterior
                  </NavLink>
                </li>
                <li className="py-0.5 px-1 text-lg duration-300 hover:bg-[#051733] hover:text-white rounded-sm">
                  <NavLink to="/logistic" className={activeLink}>
                    Logistic
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="p-1 hover:bg-[#051733] hover:text-white duration-300 hover:duration-300 rounded-md">
              <NavLink to="/blogs" className={activeLink}>
                Blogs
              </NavLink>
            </li>
            <li className="p-1 hover:bg-[#051733] hover:text-white duration-300 hover:duration-300 rounded-md">
              <NavLink to="/client" className={activeLink}>
                Client
              </NavLink>
            </li>
            <li className="p-1 hover:bg-[#051733] hover:text-white duration-300 hover:duration-300 rounded-md">
              <NavLink to="/contact" className={activeLink}>
                Contact
              </NavLink>
            </li>
            <li className="p-1 hover:bg-[#051733] hover:text-white duration-300 hover:duration-300 rounded-md">
              <NavLink to="/career_opportunities" className={activeLink}>
                Career opportunities
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
