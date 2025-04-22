import React, { useState } from "react";
import logo from "../../assets/Images/logo bike.png";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const location = useLocation();
  const activePage = location.pathname.split("/").pop() || "home";

  return (
    <>
      <div className="bg-[#121212] py-4 border-b border-white/20 sticky top-0 z-50">
        <div className="flex justify-between items-center w-11/12 2xl:w-9/12 mx-auto">
          <div className="lg:hidden">
            <FaBars
              className="text-white text-lg cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          <Link to="/" className="flex justify-center w-full lg:w-auto">
            <img src={logo} alt="Logo" className="w-36" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`${
                activePage === "home"
                  ? "text-[#ff2626]"
                  : "text-white hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                activePage === "about"
                  ? "text-[#ff2626]"
                  : "text-white hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
            >
              About us
            </Link>
            <Link
              to="/products"
              className={`${
                activePage === "products"
                  ? "text-[#ff2626]"
                  : "text-white hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
            >
              Products
            </Link>
            <Link
              to="/bikes"
              className={`${
                activePage === "bikes"
                  ? "text-[#ff2626]"
                  : "text-white hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
            >
              Bikes
            </Link>
            {/* <Link
              to="/blogs"
              className={`${
                activePage === "blogs"
                  ? "text-[#ff2626]"
                  : "text-white hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
            >
              Blogs
            </Link> */}
            <Link
              to="/gallery"
              className={`${
                activePage === "gallery"
                  ? "text-[#ff2626]"
                  : "text-white hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`${
                activePage === "contact"
                  ? "text-[#ff2626]"
                  : "text-white hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <FaSearch className="text-white text-lg cursor-pointer" />
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-white text-lg" />
              <div className="absolute pt-1 px-1 rounded-full bg-[#ff2626] -top-2.5 -right-2 ">
                <p className="text-white text-xs">0</p>
              </div>
            </div>
            <FaUser className="text-white text-lg cursor-pointer" />
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden mt-4 bg-[#121212] fixed top-18.5 left-0 w-2/3 h-screen transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-end px-4 py-2">
            <FaTimes
              className="text-white text-lg cursor-pointer"
              onClick={closeMenu}
            />
          </div>

          <div className="flex flex-col items-center gap-4 text-white">
            <Link
              to="/"
              className={`${
                activePage === "home"
                  ? "text-[#ff2626]"
                  : "hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                activePage === "about"
                  ? "text-[#ff2626]"
                  : "hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
              onClick={closeMenu}
            >
              About us
            </Link>
            <Link
              to="/products"
              className={`${
                activePage === "products"
                  ? "text-[#ff2626]"
                  : "hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link
              to="/bikes"
              className={`${
                activePage === "bikes"
                  ? "text-[#ff2626]"
                  : "hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
              onClick={closeMenu}
            >
              Bikes
            </Link>
            {/* <Link
              to="/blogs"
              className={`${
                activePage === "blogs"
                  ? "text-[#ff2626]"
                  : "hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
              onClick={closeMenu}
            >
              Blogs
            </Link> */}
            <Link
              to="/gallery"
              className={`${
                activePage === "gallery"
                  ? "text-[#ff2626]"
                  : "hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`${
                activePage === "contact"
                  ? "text-[#ff2626]"
                  : "hover:text-[#ff2626]"
              } cursor-pointer text-lg uppercase`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;