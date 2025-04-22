import React, { useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1588627541420-fce3f661b779?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdG9yY3ljbGV8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1430931/pexels-photo-1430931.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/163789/sky-road-travel-trip-163789.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/529782/pexels-photo-529782.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/30749318/pexels-photo-30749318/free-photo-of-vibrant-red-motorcycle-parked-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/31651326/pexels-photo-31651326/free-photo-of-green-sport-motorcycle-in-dimly-lit-garage.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/29751494/pexels-photo-29751494/free-photo-of-motorcycle-rider-on-kawasaki-z1000-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://img.freepik.com/premium-photo/red-motorcycle-parked-by-lake-misty-autumn-forest_184808-22717.jpg?semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/summer-extreme-motorcycle-riding_7502-8834.jpg?semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/cool-motorcycle-presentation-outdoors_23-2150849607.jpg?semt=ais_hybrid&w=740",
    "https://img.freepik.com/premium-photo/classic-motorcycle-parked-by-misty-lake-surrounded-by-autumn-foliage_184808-22555.jpg?semt=ais_hybrid&w=740",
  ];
  useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
    

  return (
    <>
      <div>
        <PageHeader pageName={"Gallery"} /> 
        <div className="bg-[#121212] py-16 md:py-20">
          <div className="w-11/12 2xl:w-9/12 mx-auto">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full rounded-lg cursor-pointer hover:opacity-80 transition-all duration-300"
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Modal View */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-5xl max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
