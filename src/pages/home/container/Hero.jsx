import React from "react";
import { images } from "../../../constants";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row px-5 py-5 ">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px] ">
          Read the most Interesting articles here
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl xl:text-xl lg:text-base lg:text-left">
          Releated to the ancient wisdom, perspective with modern thoughts and
          concept from different <em>Darshans</em>, <em>Scriptures</em> and many
          more
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 xl:mt-10 lg:mt-6 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              type="text"
              placeholder="Search article"
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 py-3 w-full focus:outline-none shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] md:py-4"
            />
          </div>
          <button
            type="button"
            className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2"
          >
            Search
          </button>
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic lg:mt-4 mt-2 lg:text-sm xl:text-base ">Popular Tags:</span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base ">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">User Experience</li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">Design</li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">User Interface</li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2 ">
        <img src={images.Scripture} alt="" className="w-[750px] pl-[45px] transition-all duration-200 hover:scale-105 " />
      </div>
    </section>
  );
};

export default Hero;
