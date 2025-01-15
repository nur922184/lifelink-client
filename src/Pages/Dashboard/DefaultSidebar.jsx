import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaClipboard, FaEnvelope, FaUser, FaBox, FaSignInAlt, FaUserPlus, FaBars } from "react-icons/fa";

export function DefaultSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="sm:hidden fixed top-16 right-4 bg-blue-500 text-white p-2 rounded-md z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`top-20 right-0 w-64 bg-gray-100 border-l shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 sm:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="flex items-center p-4 border-b">
          <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg font-bold">
            F
          </div>
          <span className="ml-2 text-lg font-bold text-gray-800">Flowbite</span>
        </div>

        {/* Menu Links */}
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
              >
                <FaTachometerAlt className="w-5 h-5" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/kanban"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
              >
                <FaClipboard className="w-5 h-5" />
                <span className="ml-3">Kanban</span>
                <span className="ml-auto text-xs text-white bg-blue-500 px-2 py-0.5 rounded-full">
                  Pro
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/inbox"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
              >
                <FaEnvelope className="w-5 h-5" />
                <span className="ml-3">Inbox</span>
                <span className="ml-auto text-xs text-white bg-blue-500 px-2 py-0.5 rounded-full">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
              >
                <FaUser className="w-5 h-5" />
                <span className="ml-3">Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
              >
                <FaBox className="w-5 h-5" />
                <span className="ml-3">Products</span>
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
              >
                <FaSignInAlt className="w-5 h-5" />
                <span className="ml-3">Sign In</span>
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
              >
                <FaUserPlus className="w-5 h-5" />
                <span className="ml-3">Sign Up</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
