import React from "react";
import { FaEye, FaMotorcycle } from "react-icons/fa";
import { GiSpeedometer, GiWeight } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";
import { Link } from "react-router-dom";

const BikeCard = ({
  id,
  name,
  images,
  originalPrice,
  shortDescription,
  topSpeed,
  power,
  torque,
  companyName,
  engineType,
  bikeWeight,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-4 md:gap-6 p-5 md:p-7 rounded-md bg-[#222222] text-white w-fit transition-all duration-300 group">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-2xl md:text-3xl font-semibold line-clamp-1">
            {name}
          </h2>
          <div
            className="flex items-center justify-center p-3.5 border border-white/10 hover:bg-red-600 cursor-pointer text-white/80 hover:text-white transition-all duration-300 ease-in-out"
            onClick={() =>
              document.getElementById(`bike-modal-${name}`).showModal()
            }
          >
            <FaEye className="text-base" />
          </div>

          {/* Modal for this specific bike */}
          <dialog id={`bike-modal-${name}`} className="modal modal-middle">
            <div className="modal-box max-w-[1232px] w-full p-0 overflow-hidden relative">
              <form method="dialog" className="absolute right-2 top-2 z-10">
                <button className="btn btn-sm btn-circle btn-ghost text-white">
                  ✕
                </button>
              </form>
              <div className="flex flex-col md:flex-row items-stretch max-h-[90vh]">
                {/* Image section with fixed dimensions */}
                <div className="w-full md:w-1/2 relative aspect-[4/3]">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={images}
                    alt={name}
                  />
                </div>
                <div className="w-full md:w-1/2 p-5 md:p-10 bg-[#222222] text-white space-y-4 md:space-y-7 overflow-y-auto">
                  <div className="space-y-2 md:space-y-4">
                    <h3 className="font-semibold text-2xl md:text-4xl truncate">
                      {name}
                    </h3>
                    <p className="text-sm uppercase roboto">
                      Total Price:{" "}
                      <span className="text-lg md:text-2xl uppercase text-red-500 font-semibold">
                        ${originalPrice}
                      </span>
                    </p>
                  </div>

                  <div className="border-t border-white/20 pt-4 md:pt-6">
                    <p className="roboto text-[#b1b1b1] text-base leading-7">
                      {shortDescription}
                    </p>
                  </div>

                  <div className="space-y-3.5 md:space-y-5">
                    <h3 className="uppercase text-xl md:text-2xl font-semibold">
                      Specifications
                    </h3>
                    <div className="space-y-2 md:space-y-4">
                      <div className="flex gap-3">
                        <p className="text-[#b1b1b1] text-nowrap roboto">
                          Maximum speed
                        </p>
                        <div className="border-b border-dotted border-[#b1b1b1] w-full mb-1"></div>
                        <p className="font-semibold roboto text-nowrap">
                          {topSpeed}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <p className="text-[#b1b1b1] text-nowrap roboto">
                          Power
                        </p>
                        <div className="border-b border-dotted border-[#b1b1b1] w-full mb-1"></div>
                        <p className="font-semibold roboto text-nowrap">
                          {power}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <p className="text-[#b1b1b1] text-nowrap roboto">
                          Torque
                        </p>
                        <div className="border-b border-dotted border-[#b1b1b1] w-full mb-1"></div>
                        <p className="font-semibold roboto text-nowrap">
                          {torque}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <p className="text-[#b1b1b1] text-nowrap roboto">
                          Engine Type
                        </p>
                        <div className="border-b border-dotted border-[#b1b1b1] w-full mb-1"></div>
                        <p className="font-semibold roboto text-nowrap">
                          {engineType}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <p className="text-[#b1b1b1] text-nowrap roboto">
                          Weight
                        </p>
                        <div className="border-b border-dotted border-[#b1b1b1] w-full mb-1"></div>
                        <p className="font-semibold roboto text-nowrap">
                          {bikeWeight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>

        <div className="w-72 h-44 md:w-96 md:h-64 rounded-lg overflow-hidden relative aspect-[4/3]">
          <img
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-150 transition-transform duration-1000"
            src={images}
            alt={name}
          />
        </div>

        <div className="flex gap-5 md:gap-14">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex gap-3">
              <FaMotorcycle className="text-red-600 text-3xl" />
              <div>
                <h4 className="text-white text-lg md:text-xl font-semibold">
                  {companyName}
                </h4>
                <p className="text-gray-400">Make</p>
              </div>
            </div>
            <div className="flex gap-3">
              <GiSpeedometer className="text-red-600 text-3xl" />
              <div>
                <h4 className="text-white text-lg md:text-xl font-semibold">
                  {topSpeed}
                </h4>
                <p className="text-gray-400">Maximum speed</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            {/* <div className="flex gap-3">
              <TbEngine className="text-red-600 text-3xl" />
              <div>
                <h4 className="text-white text-lg md:text-xl font-semibold">
                  {engineType}
                </h4>
                <p className="text-gray-400">Engine Type</p>
              </div>
            </div>
            <div className="flex gap-3">
              <GiWeight className="text-red-600 text-3xl" />
              <div>
                <h4 className="text-white text-lg md:text-xl font-semibold">
                  {bikeWeight}
                </h4>
                <p className="text-gray-400">Kerb Weight</p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-white/10 pt-4 md:pt-5">
          <div>
            <p className="text-gray-400">Total Price</p>
            <h4 className="text-white text-lg md:text-xl font-semibold">
              ${originalPrice}
            </h4>
          </div>
          <Link to={`/bikes/${id}`}
            className="uppercase text-white bg-red-600 hover:bg-red-700 py-2.5 px-6 md:py-3 md:px-8 font-bold cursor-pointer transition-all duration-300 rounded-lg"
            onClick={() =>
              document.getElementById(`bike-modal-${name}`).showModal()
            }
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
