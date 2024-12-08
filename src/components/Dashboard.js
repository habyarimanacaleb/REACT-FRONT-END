import React ,{useState} from "react";
import { FaExchangeAlt, FaMoneyCheck ,FaEllipsisH, FaMoneyBillAlt, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Using FontAwesome icons
import Sections from "./cards/Sections";


const Dashboard = () => {
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
    <div className="space-y-4 p-5">
      <div className="toggle-btn pt-4">
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div className="flex items-center justify-between  text-white p-4 rounded-lg">
        {/* Left: Greeting and Account text */}
        <div className="user-account">
          <h2 className="text-3xl font-semibold">Hi, Micheli</h2>
          <p className="text-sm text-white-400 text-bold-400">Account</p>
        </div>

        {/* Right: Avatar and Horizontal Three Dots */}
        <div className="user-account flex flex-col justfy-center items-center space-x-4">
          {/* Avatar Image */}
          <img 
            src="images/avatar.jpg"  // Replace with actual avatar URL
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          {/* Horizontal Three Dots */}
          <FaEllipsisH size={30} className="cursor-pointer text-white-400 text-bold-400" />
        </div>
      </div>
      {/* Container for the 4 balance boxes */}
      <div className="relative flex flex-col items-center mt-12 ">
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
      <div className="absolute top-2/3 transform -translate-y-1/8 mt-5 flex justify-around w-full px-5">
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
            {/* Container for Sliding Action Boxes */}
        <div className="relative overflow-hidden mt-12">
          {/* Sliding Wrapper */}
          <div
            className="flex gap-4 animate-slide transition-transform"
          >
            {/* Box 1 - Transfer */}
            <div
              role="button"
              aria-label="Transfer Funds"
              tabIndex="0"
              className="bg-blue-300 p-4 rounded-lg shadow-lg flex flex-col w-44 items-center justify-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              <FaExchangeAlt className="text-3xl text-gray-700 mb-2" />
              <h4 className="text-lg font-semibold text-gray-700">Transfer</h4>
            </div>

            {/* Box 2 - Deposit */}
            <div
              role="button"
              aria-label="Make a Deposit"
              tabIndex="0"
              className="bg-blue-300 p-4 rounded-lg shadow-lg flex flex-col w-44 items-center justify-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              <FaMoneyCheck className="text-3xl text-gray-700 mb-2" />
              <h4 className="text-lg font-semibold text-gray-700">Deposit</h4>
            </div>

            {/* Box 3 - Pay */}
            <div
              role="button"
              aria-label="Pay Bills"
              tabIndex="0"
              className="bg-blue-300 p-4 rounded-lg shadow-lg flex flex-col w-44 items-center justify-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              <FaMoneyBillAlt className="text-3xl text-gray-700 mb-2" />
              <h4 className="text-lg font-semibold text-gray-700">Pay</h4>
            </div>
            <div
              role="button"
              aria-label="View Messages"
              tabIndex="0"
              className="bg-blue-300 p-4 rounded-lg shadow-lg flex flex-col w-44 items-center justify-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              <FaEnvelope className="text-3xl text-gray-700 mb-2" />
              <h4 className="text-lg font-semibold text-gray-700">Messages</h4>
            </div>
          </div>
        </div>
       <Sections />
    </div>
  );
};

export default Dashboard;
