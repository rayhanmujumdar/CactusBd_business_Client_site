import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function RouteLink({ pageName, backRoute, path}) {
  return (
    <div data-aos="fade-down" className="w-full bg-[#051733] md:py-32 py-20">
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col gap-y-2">
          <h1 className="text-white md:text-4xl text-2xl uppercase">
            {pageName}
          </h1>
          <div className="text-white uppercase flex items-center cursor-context-menu">
            <p className="text-sm">{backRoute}</p>
            <ChevronRightIcon className="w-4 h-4 mx-1"></ChevronRightIcon>
            <p className="text-sm">{path}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
