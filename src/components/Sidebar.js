import React from "react";
import { FaTachometerAlt, FaUserFriends, FaExchangeAlt, FaMoneyCheckAlt, FaCreditCard, FaLifeRing, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: <FaTachometerAlt />, text: "Dashboard" },
    { icon: <FaUserFriends />, text: "Accounts" },
    { icon: <FaExchangeAlt />, text: "Transfer" },
    { icon: <FaMoneyCheckAlt />, text: "Deposit Check" },
    { icon: <FaCreditCard />, text: "Payment" },
    { icon: <FaLifeRing />, text: "Supports" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
      id="sidebar"
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        {/* Logo and Brand Name */}
        {isOpen && (
          <div>            
          <img
              src="images/Logo-image-2.png" // Path to your logo image
              alt="Brand Logo"
              className="h-40 w-40"
            />
         </div>
        )}
        <button onClick={toggleSidebar}>
          {isOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="mt-4">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="p-4 flex items-center hover:bg-gray-700 cursor-pointer"
            >
              <div className="mr-4">{item.icon}</div>
              {isOpen && <span>{item.text}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
