import React from "react";
import myImg from "../../../assets/Images/myImage.png";

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
                    src="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/480676507_592730777070517_3033229464379547504_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=6kTdnLEyjQQQ7kNvwHGMWBV&_nc_oc=AdmNVKL-YX41UNHkEehXy1iTeLOyK49jE7LSZaZ05b9HW9I4pB79eHg1JogrzR4opm0&_nc_zt=23&_nc_ht=scontent.fdac41-2.fna&_nc_gid=rmZc25UkTvk2nqLQ705cEA&oh=00_AfE7nw9dTvmhkpFr94GtatvroG3U5ZxHai8P2bexHW7ZPw&oe=680ED19C"
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
                    src="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-1/488307415_2070002016807873_8876329404931679682_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=m14XTyVoxTUQ7kNvwFEvx6k&_nc_oc=AdlC6Rj0DVBLSHMbT1-5kVPodhJw-CMcB8_UQOP-JK-5Kp9hvU0kt2n1vqO2UcxrBOA&_nc_zt=24&_nc_ht=scontent.fdac41-2.fna&_nc_gid=BrjIBD0sh7pM-T6jLoJEEw&oh=00_AfGZflvxub-n6weA6vylYvK5E7CcI-KZEfJwbao8KVfm3w&oe=680EC91B"
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
                    src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/491850672_552368101240586_6904360610195060246_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=spW0ufgoyCMQ7kNvwGjAqdt&_nc_oc=AdnGCibtmHkTCLKYV4gZaKr49vtsWbdij0izxljiO5EP4utsTZGhlsV8aNPY_mXMJqw&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=_rbDzaPnSUkNiMH7SQLwkw&oh=00_AfEOkjIeKVv1MPedUCgsDMMBZDj6wlrTsE9yTPmzo4kmeA&oe=680EDCAD"
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
