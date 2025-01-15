import React, { useState } from "react";
import { FaBars, FaTachometerAlt, FaClipboard, FaEnvelope, FaUser, FaBox, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 sm:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center p-4 border-b">
          <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
            F
          </div>
          <span className="ml-2 text-lg font-bold text-gray-800">Dashboard</span>
        </div>

        {/* Menu Links */}
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                <FaTachometerAlt className="w-5 h-5" />
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                <FaClipboard className="w-5 h-5" />
                <span className="ml-3">Kanban</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                <FaEnvelope className="w-5 h-5" />
                <span className="ml-3">Inbox</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                <FaUser className="w-5 h-5" />
                <span className="ml-3">Users</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                <FaBox className="w-5 h-5" />
                <span className="ml-3">Products</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-sm sm:hidden">
          <button
            className="text-gray-700"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars size={24} />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow rounded-lg">Card 1</div>
            <div className="p-4 bg-white shadow rounded-lg">Card 2</div>
            <div className="p-4 bg-white shadow rounded-lg">Card 3</div>
            <div className="p-4 bg-white shadow rounded-lg">Card 4</div>
            <div className="p-4 bg-white shadow rounded-lg">Card 5</div>
            <div className="p-4 bg-white shadow rounded-lg">Card 6</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
