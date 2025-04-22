import React, { useState, useEffect, useRef } from "react";

const Count = () => {
  const [counts, setCounts] = useState({
    satisfaction: 0,
    sold: 0,
    branches: 0,
    certifications: 0,
  });

  const sectionRef = useRef(null);
  const duration = 2000;
  const targetValues = {
    satisfaction: 100,
    sold: 3562,
    branches: 200,
    certifications: 30,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const startTime = performance.now();

    const updateCounts = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setCounts({
        satisfaction: Math.floor(progress * targetValues.satisfaction),
        sold: Math.floor(progress * targetValues.sold),
        branches: Math.floor(progress * targetValues.branches),
        certifications: Math.floor(progress * targetValues.certifications),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        setCounts(targetValues);
      }
    };

    requestAnimationFrame(updateCounts);
  };

  return (
    <div className="bg-[#121212] pb-16 md:pb-20" ref={sectionRef}>
      <div className="w-11/12 2xl:w-9/12 mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 px-7 lg:px-10 text-white uppercase">
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4 px-20">
            <h1 className="text-4xl lg:text-5xl font-medium">
              {counts.satisfaction}%
            </h1>
            <p className="text-[#b3b3b3] text-base lg:text-lg text-nowrap">
              Satisfaction Clients
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4 px-20">
            <h1 className="text-4xl lg:text-5xl font-medium">
              {counts.sold.toLocaleString()}
            </h1>
            <p className="text-[#b3b3b3] text-base lg:text-lg text-nowrap">
              motorcycle sold
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4 px-20">
            <h1 className="text-4xl lg:text-5xl font-medium">
              {counts.branches}+
            </h1>
            <p className="text-[#b3b3b3] text-base lg:text-lg text-nowrap">
              Dealer Branches
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4 px-20">
            <h1 className="text-4xl lg:text-5xl font-medium">
              {counts.certifications}+
            </h1>
            <p className="text-[#b3b3b3] text-base lg:text-lg text-nowrap">
              Certifications Hold
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
