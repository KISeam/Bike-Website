import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaTachometerAlt,
  FaBolt,
  FaWeightHanging,
  FaGasPump,
  FaMotorcycle,
} from 'react-icons/fa';
import { GiTireIron } from 'react-icons/gi';
import { MdOutlineKeyboardCommandKey } from 'react-icons/md';

const SingleBike = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bike, setBike] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/Bike-Data/Bikes.json")
      .then((res) => res.json())
      .then((data) => {
        const filterBike = data.find((prod) => prod.id == id);
        setBike(filterBike);
      });
  }, [id]);

  if (!bike) {
    return (
      <p className="text-center mt-10 text-gray-500">Loading bike...</p>
    );
  }

  const {
    images,
    name,
    category,
    topSpeed,
    power,
    torque,
    mileage,
    brakesType,
    tyreType,
    originalPrice,
    bikeWeight,
    engineType,
    companyName,
    shortDescription,
    description,
    bikeFeature,
    frontTire = "N/A",
    rearTire = "N/A",
  } = bike;

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-8 px-4 lg:px-16">
        {/* Main Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:min-h-[600px]">
          {/* Image Section with Modal */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 flex items-center justify-center h-[400px] lg:h-full bg-gray-900">
            {/* Clickable Image Button */}
            <label htmlFor={`modal-${id}`} className="cursor-pointer w-full h-full block flex items-center justify-center">
              <img
                src={images}
                alt={name}
                className="w-full h-full object-cover"
              />
            </label>
          </div>

          {/* Bike Details */}
          <div className="space-y-8 h-full">
            <div>
              <span className="bg-red-600 text-xs md:text-sm px-3 py-1 rounded-full font-medium">
                {category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3">{name}</h1>
              <div className="flex items-center mt-2">
                <FaMotorcycle className="text-red-500 mr-2" />
                <p className="text-gray-400 text-lg md:text-xl">{companyName}</p>
              </div>

              <div className="mt-6 flex items-center">
                <span className="text-3xl md:text-4xl font-bold text-red-500">
                  ${originalPrice.toLocaleString()}
                </span>
                <div className="mx-4 h-10 w-px bg-gray-700"></div>
                <div className="flex items-center gap-2">
                  <FaWeightHanging className="text-red-500" />
                  <span>{bikeWeight}</span>
                </div>
              </div>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-t border-b border-gray-800">
              <div className="flex items-center gap-3 p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <FaTachometerAlt className="text-xl md:text-2xl text-red-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Top Speed</p>
                  <p className="font-medium">{topSpeed}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <FaBolt className="text-xl md:text-2xl text-red-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Power</p>
                  <p className="font-medium">{power}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <FaBolt className="text-xl md:text-2xl text-red-500 rotate-90" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Torque</p>
                  <p className="font-medium">{torque}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <FaGasPump className="text-xl md:text-2xl text-red-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Mileage</p>
                  <p className="font-medium">{mileage}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg col-span-2 sm:col-span-1">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <MdOutlineKeyboardCommandKey className="text-xl md:text-2xl text-red-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Brakes</p>
                  <p className="font-medium line-clamp-1">{brakesType}</p>
                </div>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold mb-4">Engine</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex justify-between">
                      <span>Type</span>
                      <span className="text-right">{engineType}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Power Output</span>
                      <span>{power}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Torque</span>
                      <span>{torque}</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold mb-4">Dimensions</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex justify-between">
                      <span>Weight</span>
                      <span>{bikeWeight}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tire Size (Front)</span>
                      <span>{frontTire || 'N/A'}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tire Size (Rear)</span>
                      <span>{rearTire || 'N/A'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Sections */}
        <div className="mt-16 space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              {shortDescription}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Detailed Description</h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {bikeFeature}
            </p>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal for Enlarged Image */}
      <input type="checkbox" id={`modal-${id}`} className="modal-toggle" />
      <label htmlFor={`modal-${id}`} className="modal cursor-pointer">
        <label className="modal-box relative max-w-4xl p-0" htmlFor="">
          <img
            src={images}
            alt={name}
            className="w-full h-auto rounded-lg"
          />
        </label>
      </label>
    </div>
  );
};

export default SingleBike;