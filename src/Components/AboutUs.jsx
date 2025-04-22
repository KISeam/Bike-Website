import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="bg-[#121212] py-16 md:py-20">
        <div className="w-11/12 2xl:w-9/12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2">
              <div className="h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2024/01/458591_24ym_cb650r.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="bg-[#ff2626] py-2 px-2 md:px-4 text-sm w-fit">
                    Our Bike Categories
                  </p>
                  <h1 className="text-4xl lg:text-5xl font-semibold">
                    Helping you find the perfect motorbike
                  </h1>
                </div>

                <p className="text-[#b3b3b3] text-base lg:text-lg">
                  The wind in your face, the road beneath your wheels — every
                  sense awakened. Riding demands focus, skill, and presence.
                  Unlike driving, riding connects you to the world around you.
                  It’s different for everyone, yet we all feel that same spark —
                  the freedom, the thrill, the unspoken bond between riders.
                  This is more than a way to travel — it’s a way of life.
                </p>

                <p className="text-[#b3b3b3] text-base lg:text-lg">
                  We ride because every twist of the throttle reminds us we’re
                  alive. The road talks to us — through the bumps, the wind, the
                  adrenaline. This isn’t about comfort. It’s about freedom,
                  skill, and the bond only riders understand.
                </p>

                <Link
                  to="/about"
                  className="flex items-center gap-1 border-transparent border-b-2 hover:border-[#ff2626] w-fit mt-6 md:mt-10"
                >
                  <p className="text-base font-semibold uppercase">
                    More About Us
                  </p>
                  <GoArrowUpRight className="text-xl mt-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
