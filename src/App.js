import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

import'./App.css';

const App = () => {
  // Manage sidebar state
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Toggle sidebar state
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Switch between true and false
  };

  return (
    <div className="app flex h-screen bg-gray-100">
      {/* Pass functions and state as props */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`
        
      }
     
      id="main-content"
      >
        < Dashboard />
      </main>
    </div>
  );
};

export default App;
