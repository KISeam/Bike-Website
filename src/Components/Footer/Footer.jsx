import React from "react";
import logo from "../../assets/Images/logo bike.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="py-16 md:py-20 border-y border-gray-600">
          <div className="w-11/12 2xl:w-8/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="space-y-8">
                <div className="w-48">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-2.5">
                    <IoLocationSharp className="text-[#ff2626] text-lg mt-1" />
                    <p className="text-[#b1b1b1] roboto font-normal text-lg">
                      Jatrabari, Dhaka
                    </p>
                  </div>

                  <div className="flex gap-2.5">
                    <FaPhoneAlt className="text-[#ff2626] text-lg mt-1" />
                    <p className="text-[#b1b1b1] roboto font-normal text-lg">
                      +880 1580768366
                    </p>
                  </div>

                  <div className="flex gap-2.5">
                    <MdEmail className="text-[#ff2626] text-lg mt-1" />
                    <p className="text-[#b1b1b1] roboto font-normal text-lg">
                      khairulislamseam01@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-30 text-white">
                <div className="space-y-8">
                  <h3 className="text-xl md:text-2xl font-semibold uppercase text-nowrap">
                    About Us
                  </h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/about"
                      className="text-[#b1b1b1] roboto font-normal text-lg hover:text-white"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/"
                      className="text-[#b1b1b1] roboto font-normal text-lg hover:text-white"
                    >
                      Home
                    </Link>
                    <Link
                      to="/contact"
                      className="text-[#b1b1b1] roboto font-normal text-lg hover:text-white"
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-xl md:text-2xl font-semibold uppercase text-nowrap">
                    Quick links
                  </h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/products"
                      className="text-[#b1b1b1] roboto font-normal text-lg hover:text-white"
                    >
                      Shop
                    </Link>
                    <Link
                      to="/bikes"
                      className="text-[#b1b1b1] roboto font-normal text-lg hover:text-white"
                    >
                      Bikes
                    </Link>
                    <Link
                      to="/gallery"
                      className="text-[#b1b1b1] roboto font-normal text-lg hover:text-white"
                    >
                      Gallery
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-8 text-white">
                <h3 className="text-xl md:text-2xl font-semibold uppercase">
                  SUBSCRIBE FOR UPDATED
                </h3>

                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="w-full h-12 px-4 bg-[#121212] border border-gray-600 rounded-l-md focus:outline-none focus:border-[#ff2626]"
                  />
                  <button className="bg-[#ff2626] h-12 px-4 rounded-r-md text-white font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-11/12 2xl:w-8/12 mx-auto py-8">
          <div className="flex flex-wrap justify-between gap-6">
            <p className="roboto text-gray-400">
              Copyright &copy; 2025 Bike Star
            </p>
            <div className="flex items-center gap-6">
              <FaFacebook className="text-gray-400 hover:text-white cursor-pointer text-lg" />
              <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer text-lg" />
              <FaTwitter className="text-gray-400 hover:text-white cursor-pointer text-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
