import React from "react";
import myImg from "../../../assets/Images/myImage.png";
import sazzedImage from "../../../assets/Images/Sazzed Image.jpg";
import syedRahatHasanImage from "../../../assets/Images/Syed Rahat Hasan Image.jpeg";
import dinIslamImage from "../../../assets/Images/Din Islam Image.jpg";

const OurTeam = () => {
  return (
    <>
      <div className="bg-black">
        <div className="w-11/12 2xl:w-9/12 mx-auto border-b border-gray-600 py-16 md:py-20">
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="space-y-4">
              <p className="bg-[#ff2626] py-2 px-2 md:px-4 text-sm w-fit">
                Our Team
              </p>
              <h1 className="text-4xl lg:text-5xl font-semibold">
                Meet Our Team
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              <div className="space-y-5">
                <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={myImg}
                    alt="Seam"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-xl 2xl:text-2xl text-white font-semibold">
                    Khairul Islam Seam
                  </h2>
                  <p className="roboto text-nowrap text-[#b1b1b1]">
                    Director of Marketing
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={sazzedImage}
                    alt="Sazzed Image"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-xl 2xl:text-2xl text-white font-semibold">
                    Sazzed
                  </h2>
                  <p className="roboto text-nowrap text-[#b1b1b1]">
                    Media Buyer
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={syedRahatHasanImage}
                    alt="Syed Rahat Hasan Image"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-xl 2xl:text-2xl text-white font-semibold">
                    Syed Rahat Hasan
                  </h2>
                  <p className="roboto text-nowrap text-[#b1b1b1]">
                    Marketing Manager
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={dinIslamImage}
                    alt="Din Islam Image"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-xl 2xl:text-2xl text-white font-semibold">
                    Din Islam
                  </h2>
                  <p className="roboto text-nowrap text-[#b1b1b1]">
                    Director of Operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
