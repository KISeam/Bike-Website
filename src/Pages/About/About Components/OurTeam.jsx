import React from "react";

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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8Qujhe-rKUMnxpOtZZUzyuvNR9UMS-mktg&s"
                    alt=""
                  />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-xl 2xl:text-2xl text-white font-semibold">
                    Mike Finney
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOntQ0ct2DlJF7AFYbusEeKGuatsT1wAklg&s"
                    alt=""
                  />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-xl 2xl:text-2xl text-white font-semibold">
                    Maggie Blessie
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU32nmDQnO3fJ6KNXDDcMWRw0itTsf7zSI8g&s"
                    alt=""
                  />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-xl 2xl:text-2xl text-white font-semibold">
                    Jenny Carbonneau
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9hergAcHllmQbK-owW7Aavm2gmNFJS-kYg&s"
                    alt=""
                  />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-xl 2xl:text-2xl text-white font-semibold">
                    Hannah Nelson
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
