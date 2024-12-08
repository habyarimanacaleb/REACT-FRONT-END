import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CallToActionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const boxes = [
    {
      title: "Checking Balance",
      balance: "$1,175.02",
      code: "#1234",
      status: "Available",
    },
    {
      title: "Savings Balance",
      balance: "$3,412.50",
      code: "#5678",
      status: "Available",
    },
    {
      title: "Credit Balance",
      balance: "$5,000.00",
      code: "#9101",
      status: "Available",
    },
    {
      title: "Loan Balance",
      balance: "$2,150.00",
      code: "#2345",
      status: "Available",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? boxes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === boxes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col items-center mt-12 md:hidden">
      {/* Boxes Wrapper */}
      <div className="w-full flex justify-center overflow-hidden">
        <div className="w-full flex transition-transform duration-500 ease-in-out transform" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {boxes.map((box, index) => (
            <div
              key={index}
              className="min-w-full bg-blue-300 p-4 rounded-lg shadow-lg flex flex-col space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl font-medium text-gray-600">{box.title}</span>
                <span className="text-xl font-bold text-gray-800">{box.balance}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl text-gray-500">{box.code}</span>
                <span className="text-xl text-gray-500">{box.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>
        <button
          className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
          onClick={handleNext}
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Pagination */}
      <div className="flex space-x-2 mt-4">
        {boxes.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-gray-700" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CallToActionCarousel;
