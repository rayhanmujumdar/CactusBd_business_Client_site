import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import RouteLink from "../RouteLink/RouteLink"

function About() {
  return (
    <>
    <RouteLink pageName="About" backRoute="Home" path="about"></RouteLink>
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col  justify-center items-center md:py-20 p-5 gap-x-5">
          <div data-aos="fade-right" className="flex-1">
            <img
              src="utils/cactusbd_logo.png"
              alt=""
              className="md:max-w-xl min-w-full"
            />
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col md:justify-start md:items-start justify-center items-center p-3"
          >
            <div className="flex items-center gap-x-1 my-1">
              <UserCircleIcon className="w-8 h-8 text-[#061835] hover:text-[#1D6AED]"></UserCircleIcon>
              <h1 className="text-xl font-bold uppercase">About</h1>
            </div>
            <h1 className="text-2xl my-1 font-semibold text-yellow-500">
              We Are....
            </h1>
            <p className="font-serif text-lg text-justify">
              <span className="font-bold text-xl text-green-800">
                Cactus BD
              </span>{" "}
              started its operation in 2008 by some creative youths who have
              developed ideas for the corporate houses for their events,
              activation, catering, digital printing and outsourcing related
              solutions and later on{" "}
              <span className="font-bold">Cactus BD</span> gave its footprint in
              supply section to provide logistical support to whom it required.
              right now, Cactus BD is widely recongnized as a complete
              event,activation & outsourcing solution and supply factory.{" "}
              <span className="font-bold">Cactus BD</span> is team of
              young,creative,passionate and dynamic professionals with a
              sparkling stream of ideas having prior experience in the field of
              supply,event and entertainment. Team work, time
              management,professionals with a sparking stream of ideas having
              prior experience in the filed of supply,event and entertainment.
              Team work,time management,professionalism are the main secret of{" "}
              <span className="font-bold">Cactus BD</span> as a reliable entity
              to whom you can trust to achieve your foal in the field of
              logistic & supply,event & outsourcing solution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
