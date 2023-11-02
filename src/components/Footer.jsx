import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
// import { MdWebhook } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import images from "../constants/images";

const Footer = () => {
  return (
    <section className="bg-dark-hard -mt-1">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-x-5 md:gap-x-10 gap-y-10 md:grid-cols-12 lg:grid-cols-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Landingpage</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Referral Program</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Analysis</a>
            </li>
            <li>
              <a href="/">Research</a>
            </li>
            <li>
              <a href="/">Prizes</a>
            </li>
            <li>
              <a href="/">Ranking</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Changelog</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">Report</a>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 mt-3 md:mt-0 lg:mt-2">
          <Link to={"/"}>
            <img
              src={images.logo}
              alt="footerlogo"
              className="brightness-0 invert mx-auto md:mx-0"
            />
          </Link>
          <p className="text-sm text-dark-light text-center md:text-left md:text-base mt-4">
            Enbik Blogs Provides vast majority of Old Spictures and Religious
            text in Simple words
          </p>
          <ul className="flex justify-center md:justify-start items-center mt-5 space-x-4 text-gray-300">
            <li>
              <a href="/">
                <RiTwitterXFill className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebookF className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <GrInstagram className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaYoutube className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTelegramPlane className="w-6 h-auto" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 ">
          <div className="rounded-full mt-6">
            <img src={images.base} alt="baselogo" />
          </div>
          <p className="text-dark-light font-bold italic">
            Copyright © {new Date().getFullYear()} Enbik Cognition.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
