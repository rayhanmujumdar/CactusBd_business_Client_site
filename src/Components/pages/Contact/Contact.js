import React from "react";
import RouteLink from "../RouteLink/RouteLink";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import Footer from "../../Footer/Footer";

function Contact() {
  return (
    <>
      <section>
        <RouteLink
          backRoute="Home"
          pageName="Contact Us"
          path="Contact"
        ></RouteLink>
        <div className="container mx-auto">
          <div className="md:flex md:gap-x-4 py-10 mx-5">
            {/* location map */}
            <div className="md:w-1/2 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4085231895724!2d90.41130435249205!3d23.732807216887828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b914aa255fa1%3A0x3c4fb2e975619650!2sZaman%20Tower!5e0!3m2!1sen!2sbd!4v1671287215307!5m2!1sen!2sbd"
                width="100%"
                height="400"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="cactusBD location"
              ></iframe>
            </div>
            <div className="flex flex-col md:mt-0 mt-5">
              <div className="py-2">
                <h1 className="text-2xl uppercase font-semibold">
                  We're just a{" "}
                  <span className="text-blue-600 hover:text-black">click</span>{" "}
                  away from you
                </h1>
                <p>Facing a problem? well, waiting here with the solution</p>
              </div>
              {/* contact info */}
              <div className="md:grid grid-cols-2 gap-4 md:mt-10 flex flex-col">
                <div className="flex items-center gap-x-1">
                  <div>
                    <MapPinIcon className="w-10 h-10 text-[#051733] hover:-translate-y-2 hover:duration-200 duration-200"></MapPinIcon>
                  </div>
                  <div>
                    <h1 className="text-xl text-[#00007C] font-semibold">
                      Address
                    </h1>
                    <p>
                      Zaman Tower,37/2,(1st Floor),Box Culvert Road, purana
                      paltan, Dhaka-1000
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-1">
                  <div>
                    <PhoneIcon className="w-10 h-10 text-[#051733] hover:-translate-y-2 hover:duration-200 duration-200"></PhoneIcon>
                  </div>
                  <div>
                    <h1 className="text-xl text-[#00007C] font-semibold">
                      Phone
                    </h1>
                    <p>+88-02-9855946 (Sales)</p>
                    <p>01763935868 (Admin)</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-1">
                  <div>
                    <EnvelopeIcon className="w-10 h-10 text-[#051733] hover:-translate-y-2 hover:duration-200 duration-200"></EnvelopeIcon>
                  </div>
                  <div>
                    <h1 className="text-xl text-[#00007C] font-semibold">
                      Email
                    </h1>
                    <p>mail.cbdcl@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-1">
                  <div>
                    <CalendarDaysIcon className="w-10 h-10 text-[#051733] hover:-translate-y-2 hover:duration-200 duration-200"></CalendarDaysIcon>
                  </div>
                  <div>
                    <h1 className="text-xl text-[#00007C] font-semibold">
                      Business Hour
                    </h1>
                    <p>9 am-8 pm (Sun-Thu)</p>
                  </div>
                </div>
              </div>
              {/* social media */}
              <div className="mt-8">
                <h1 className="text-[#00007C] text-xl font-semibold">
                  Follow Our Social Media
                </h1>
                <div className="mt-2">
                  <ul className="flex gap-x-2">
                    <li className="bg-[#4E69A1] w-8 h-8 text-white text-center leading-8 cursor-pointer hover:scale-90 duration-200 hover:duration-200">
                      <a href="http://facebook.com/cactusbd" target="__blank">
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="bg-[#1984BB] w-8 h-8 text-white text-center leading-8 cursor-pointer hover:scale-90 duration-200 hover:duration-200">
                      <a href="#linkedin" target="_blank">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="bg-[#CF2523] w-8 h-8 text-white text-center leading-8 cursor-pointer hover:scale-90 duration-200 hover:duration-200">
                      <a
                        href="https://www.youtube.com/@cactusbdcommunicationlimit19"
                        target="__blank"
                      >
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                    <li className="bg-[#33A9F2] w-8 h-8 text-white text-center leading-8 cursor-pointer hover:scale-90 duration-200 hover:duration-200">
                      <a href="#twitter" target="__blank">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li className="bg-[#3B3B3B] w-8 h-8 text-white text-center leading-8 cursor-pointer hover:scale-90 duration-200 hover:duration-200">
                      <a href="#instagram" target="__blank">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
