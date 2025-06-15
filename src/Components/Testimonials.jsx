import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaQuoteRight } from "react-icons/fa6";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Got my Ducati Scrambler earlier this year with Bruce helping me out — such a smooth and pleasant experience! Amazing service and seriously gorgeous bikes. Would absolutely recommend!",
      name: "John Doe",
      image: "https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg",
    },
    {
      quote:
        "Super helpful team! They really knew their stuff and made it so easy to find the perfect bike. Couldn’t have asked for a smoother experience.",
      name: "Jane Smith",
      image: "https://westernfinance.org/wp-content/uploads/speaker-4-v2.jpg",
    },
    {
      quote:
        "Exceptional service from start to finish. The team’s knowledge and professionalism made choosing the right bike effortless.",
      name: "Mike Johnson",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/Speaker_Mike_Johnson_Official_Portrait_%283x4_cropped%29.jpg",
    },
    {
      quote:
        "You won’t find a better selection of bikes anywhere, and the staff is always welcoming and knows their stuff!",
      name: "Emily Davis",
      image:
        "https://m.media-amazon.com/images/M/MV5BODY4MmI1NjEtODc5Yy00ZmYyLThkMGItNzYyNzM4MjEzNjNiXkEyXkFqcGc@._V1_.jpg",
    },
    {
      quote:
        "From start to finish, the experience was seamless. A top spot to find the bike you’ve been dreaming of.",
      name: "Chris Brown",
      image:
        "https://townsquare.media/site/625/files/2014/07/chrisbrown.jpg?w=780&q=75",
    },
    {
      quote:
        "I can't say enough good things about this place — they genuinely care about their customers. I felt like family from the moment I walked in.",
      name: "Sarah Wilson",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPs-FDzqLlNq2oLU3t2eokUZN5p3f2dYbu9g&s",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="bg-black py-16 md:py-20 border-b border-gray-800">
        <div className="w-11/12 2xl:w-9/12 mx-auto">
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="flex flex-wrap justify-between items-end gap-6 uppercase text-white">
              <div className="space-y-4">
                <p className="bg-[#ff2626] py-2 px-2 md:px-4 text-sm w-fit">
                  Testimonials
                </p>
                <h1 className="text-4xl lg:text-5xl font-semibold text-white">
                  What Our Clients Are Saying
                </h1>
              </div>

              <div className="flex gap-4">
                <div
                  className="p-4 bg-[#333333] rounded-md cursor-pointer hover:bg-[#ff2626] transition duration-300 ease-in-out"
                  onClick={handlePrev}
                >
                  <FaAngleLeft className="text-lg" />
                </div>
                <div
                  className="p-4 bg-[#333333] rounded-md cursor-pointer hover:bg-[#ff2626] transition duration-300 ease-in-out"
                  onClick={handleNext}
                >
                  <FaAngleRight className="text-lg" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
              {testimonials
                .slice(
                  currentIndex,
                  currentIndex + (window.innerWidth < 768 ? 1 : 2)
                )
                .map((testimonial, index) => (
                  <div
                    key={index}
                    className="border border-gray-600 rounded-md p-12 flex flex-col gap-4 md:gap-6"
                  >
                    <p className="roboto font-normal italic line-clamp-2 text-white">
                      {testimonial.quote}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img
                          className="size-16 rounded-full"
                          src={testimonial.image}
                          alt={`${testimonial.name}'s profile`}
                        />
                        <div className="space-y-1">
                          <h2 className="text-xl font-semibold text-white">
                            {testimonial.name}
                          </h2>
                          <p className="text-sm md:text-base text-gray-400">
                            Customer
                          </p>
                        </div>
                      </div>
                      <FaQuoteRight className="text-6xl text-[#ff2626]" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
