import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightCircleIcon,
  CogIcon,
  ClockIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#061835] text-white">
      <div className="container mx-auto">
        {/* business card */}
        <div className="flex justify-center container mx-auto items-center flex-col bg-white text-black border-l-4 border-[#1D6AED] p-10">
          <h1 className="text-[#061835] capitalize md:text-4xl text-xl font-bold text-center">
            Level up your <span className="text-[#1D6AED]">business</span> with
            the finest solutions
          </h1>
          <div className="flex items-center  justify-center relative mt-4">
            <div className="flex items-center gap-x-2 bg-[#1D6AED] text-white md:px-20 py-4 px-1 cursor-pointer">
              <PhoneIcon className="md:w-4 md:h-4 w-3 h-3"></PhoneIcon>
              <p className="font-bold md:text-md text-sm">Schedule a demo</p>
            </div>
            <div className="md:block hidden border-4 border-[rgba(0,0,0,0.3)] md:w-12 md:h-12 text-center leading-10 rounded-full absolute right-[288px] bg-white">
              <p className="md:font-bold">Or</p>
            </div>
            <div className="flex items-center justify-center gap-x-2 bg-[#061835] text-white md:px-20 px-1 py-4 cursor-pointer">
              <CogIcon className="md:w-4 md:h-4 w-3 h-3"></CogIcon>
              <p className="md:font-bold md:text-md text-sm">company brochure</p>
            </div>
          </div>
        </div>
        {/* contact / our products / useful links / work hours */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-10 items-start md:px-0 px-4">
          <div>
            <h4 className="font-bold uppercase text-md">Contact us</h4>
            <div className="flex flex-col justify-center gap-y-2">
              {/* icon and address */}
              <div className="flex items-center gap-x-2">
                <MapPinIcon className="w-6 h-6 text-[#1D6AED]"></MapPinIcon>
                <p className="text-sm font-bold">
                  6/2 Kazi nazrul islam Rd, Lalmatia, Dhaka-1207
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <EnvelopeIcon className="w-6 h-6 text-[#1D6AED]"></EnvelopeIcon>
                <p className="text-sm font-bold">info@gmail.com</p>
              </div>
              <div className="flex items-center gap-x-2">
                <PhoneIcon className="w-6 h-6 text-[#1D6AED]"></PhoneIcon>
                <p className="text-sm font-bold">015245421221 (Sales)</p>
              </div>
              <div className="flex items-center gap-x-2">
                <PhoneIcon className="w-6 h-6 text-[#1D6AED]"></PhoneIcon>
                <p className="text-sm font-bold">015245421221 (Sales)</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase text-md">useful links</h4>
            <div className="flex flex-col justify-center gap-y-2">
              <div className="flex items-center gap-x-2">
                <ArrowRightCircleIcon className="w-5 h-5 text-[#1D6AED]"></ArrowRightCircleIcon>
                <Link to="about" className="text-sm font-bold">
                  About Us
                </Link>
              </div>
              <div className="flex items-center gap-x-2">
                <ArrowRightCircleIcon className="w-5 h-5 text-[#1D6AED]"></ArrowRightCircleIcon>
                <Link to="contact" className="text-sm font-bold">
                  Content
                </Link>
              </div>
              <div className="flex items-center gap-x-2">
                <ArrowRightCircleIcon className="w-5 h-5 text-[#1D6AED]"></ArrowRightCircleIcon>
                <Link to="blogs" className="text-sm font-bold">
                  Blogs
                </Link>
              </div>
              <div className="flex items-center gap-x-2">
                <ArrowRightCircleIcon className="w-5 h-5 text-[#1D6AED]"></ArrowRightCircleIcon>
                <Link to="client" className="text-sm font-bold">
                  Client
                </Link>
              </div>
              <div className="flex items-center gap-x-2">
                <ArrowRightCircleIcon className="w-5 h-5 text-[#1D6AED]"></ArrowRightCircleIcon>
                <Link to="job_circulation" className="text-sm font-bold">
                  Job Circulation
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase text-md">our products</h4>
            <div className="flex flex-col justify-center gap-y-2">
              <div className="flex items-center gap-x-2">
                <ArrowRightCircleIcon className="w-5 h-5 text-[#1D6AED]"></ArrowRightCircleIcon>
                <Link to="about" className="text-sm font-bold">
                  Cactus Enterprise
                </Link>
              </div>
              <div className="flex items-center gap-x-2">
                <ArrowRightCircleIcon className="w-5 h-5 text-[#1D6AED]"></ArrowRightCircleIcon>
                <Link to="about" className="text-sm font-bold">
                  Cactus Enterprise
                </Link>
              </div>
              <div className="flex items-center gap-x-2">
                <ArrowRightCircleIcon className="w-5 h-5 text-[#1D6AED]"></ArrowRightCircleIcon>
                <Link to="about" className="text-sm font-bold">
                  Cactus Enterprise
                </Link>
              </div>
              <div className="flex items-center gap-x-2">
                <ArrowRightCircleIcon className="w-5 h-5 text-[#1D6AED]"></ArrowRightCircleIcon>
                <Link to="about" className="text-sm font-bold">
                  Cactus Enterprise
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
          <h4 className="font-bold uppercase text-md">work hours</h4>
            <p className="text-[#8390A2] text-sm">
              it's time to have the most incredible software experience where
              our problem will meet its solution in the most transparent way.So,
              what are you waiting for?
            </p>
            <div className="flex items-center gap-x-2">
              <ClockIcon className="w-5 h-5 text-[#1D6AED]"></ClockIcon>
              <p className="font-bold">9 AM-6PM,Sunday-Thursday</p>
            </div>
          </div>
        </div>
        {/* copy right */}
        <div className="py-5">
          <div className="w-full bg-gray-500 h-[2px] "></div>
          <p className="text-sm pt-1 md:px-0 px-2">Copyright © {year},Cactus BD, a concern of Cactus BD. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
