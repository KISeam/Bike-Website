import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  return (
    <>
      <div className="bg-[#121212] py-16 md:py-20">
        <div className="w-11/12 2xl:w-9/12 mx-auto">
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="flex flex-wrap justify-between items-end uppercase text-white">
              <div className="space-y-4">
                <p className="bg-[#ff2626] py-2 px-2 md:px-4 text-sm w-fit">
                  Our Blog
                </p>
                <h1 className="text-4xl lg:text-5xl font-semibold">
                  Latest News
                </h1>
              </div>

              <Link
                to="/blogs"
                className="flex items-center gap-1 border-transparent border-b-2 hover:border-[#ff2626]"
              >
                <p className="text-base font-semibold">View all Post</p>
                <GoArrowUpRight className="text-xl mt-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;
