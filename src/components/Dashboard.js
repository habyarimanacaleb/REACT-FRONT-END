import React from "react";
import { FaExchangeAlt, FaMoneyCheck ,FaEllipsisH, FaMoneyBillAlt, FaEnvelope } from 'react-icons/fa'; // Using FontAwesome icons
import Sections from "./cards/Sections";

const Dashboard = () => {
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
      <div className="top-call-action  flex gap-4 mt-12">
        {/* Box 1 */}
        <div className="bg-blue-300 p-2 rounded-lg shadow-lg">
          <div className="call-box-1 flex justify-between items-center mb-2">
            <span className="text-2xl pr-5 text-bold-600 font-medium text-gray-600">Checking Balance</span>
            <span className="text-xl font-bold text-gray-800">$1,175.02</span>
          </div>
          <div className="call-box-1 flex justify-between items-center">
          <span className="text-2xl pr-5 text-bold-600 text-gray-500 md:text">Code: #1234</span>
          <span className="text-xl text-gray-500">Available</span>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-blue-300 p-2 rounded-lg shadow-lg">
          <div className="call-box-1 flex justify-between items-center mb-2">
            <span className="text-2xl pr-5 text-bold-600 font-medium text-gray-600">Savings Balance</span>
            <span className="text-xl font-bold text-gray-800">$3,412.50</span>
          </div>
          <div className="call-box-1 flex justify-between items-center">
          <span className="text-2xl pr-5 text-bold-600 text-gray-500">Code: #5678</span>
          <span className="text-xl text-gray-500">Available</span>
          </div>
        </div>

        {/* Box 3 */}
        <div className=" bg-blue-300  p-2 rounded-lg shadow-lg">
          <div className="call-box-1 flex justify-between items-center mb-2">
            <span className="text-2xl pr-5 text-bold-600 font-medium text-gray-600">Credit Balance</span>
            <span className="text-xl font-bold text-gray-800">$5,000.00</span>
          </div>
          <div className="call-box-1 flex justify-between items-center">
          <span className="text-2xl pr-5 text-bold-600 text-gray-500">Code: #9101</span>
          <span className="text-xl text-gray-500">Available</span>
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-blue-300  p-2 rounded-lg shadow-lg">
          <div className="call-box-1 flex justify-between items-center mb-2">
            <span className="text-2xl pr-5 text-bold-600 font-medium text-gray-600">Loan Balance</span>
            <span className="text-xl font-bold text-gray-800">$2,150.00</span>
          </div>
          <div className="call-box-1 flex justify-between items-center">
          <span className="text-2xl text-bold-600 text-gray-500">Code: #2345</span>
          <span className="text-xl text-gray-500">Available</span>
          </div>
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
