import React from "react";
import logo from "../../assets/landing/logo.svg"; // Update the path based on your folder structure
import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiMediumFill } from "react-icons/ri";
import { MainContent } from "../../constants/content/MainContent";


const Footer = () => {
  return (
    <footer className="bg-[#222] text-white pt-12 pb-6 px-6 md:px-28 lg:px-14">
      <div className="flex flex-col md:flex-row justify-between items-center py-5 md:items-start gap-10 border-b-[1px] border-white">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center md:items-start">
            <img src={MainContent.appLogo}  alt="Crudo Logo" className="h-16 object-contain" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6 text-2xl 2xl:text-3xl">
              <FaTwitter className="hover:text-[#FF9933] cursor-pointer" />
              <FaInstagram className="hover:text-[#FF9933] cursor-pointer" />
              <FaTelegramPlane className="hover:text-[#FF9933] cursor-pointer" />
              <RiMediumFill className="hover:text-[#FF9933] cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl text-white lg:text-5xl 2xl:text-5xl leading-tight">
            Start your journey with <br /> AI Wallet right away!
          </h2>
        </div>
      </div>

      <div className="flex flex-col mt-8 gap-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-4">
              <button className="bg-bg_color text-white 2xl:text-lg px-6 py-2 rounded-lg text-sm ">
                WIN $100k
              </button>
              <button className="bg-bg_color text-white 2xl:text-lg px-6 py-2 rounded-lg text-sm ">
                How to Buy
              </button>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/terms"
                className="text-sm 2xl:text-lg text-white hover:text-[#FF9933]"
              >
                Terms and conditions
              </Link>
              <Link
                to="/privacy"
                className="text-sm 2xl:text-lg text-white hover:text-[#FF9933]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          {/* Copyright */}
          <p className="text-gray-300 text-base font-semibold 2xl:text-lg text-center">
            © 2024 AI Wallet. All rights reserved.
          </p>
        </div>

        {/* Disclaimer */}
        <p className=" text-base font-light  text-white">
          Disclaimer:
          <br />
          Digital currencies may be unregulated in your jurisdiction. The value
          of digital currencies may go down as well as up. Profits may be
          subject to capital gains or other taxes applicable in your
          jurisdiction.
        </p>
      </div>
    </footer>
  );
};

export default Footer;