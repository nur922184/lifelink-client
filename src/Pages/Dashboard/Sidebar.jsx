import React, { useState } from "react";
import {NavLink } from "react-router-dom";
import { FaBars, FaTachometerAlt, FaClipboard, FaEnvelope, FaUser, FaBox, FaSignInAlt, FaUserPlus, FaHome, FaAudible } from "react-icons/fa";
import LogOut from "../../Component/SignOut/LogOut";
import { BiSolidSpa } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import useBioDetails from "../../Hooks/useBioDetails";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [BioDetails] = useBioDetails()
  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 sm:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="flex items-center p-4 border-b">
          <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
            F
          </div>
          <span className="ml-2 text-lg font-bold text-gray-800">Dashboard</span>
        </div>

        {/* Menu Links */}
        <nav className="mt-4 mb-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/dashboard/editBiodata"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
              >
                <FaTachometerAlt className="w-5 h-5" />
                <span className="ml-3">Edit Biodata</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kanban"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
              >
                <FaClipboard className="w-5 h-5" />
                <span className="ml-3">View Biodata</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/favourites"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
              >
                <FaEnvelope className="w-5 h-5" />
                <span className="ml-3">Favourites Biodata</span>
                <div className="badge badge-secondary ml-8">{BioDetails.length}</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg"
              >
                <FaUser className="w-5 h-5" />
                <span className="ml-3">My Contact Request</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <nav className="mt-4 ">
          <ul className="space-y-2">
            <li><NavLink className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg" to="/"><FaHome className="w-5 h-5" /> <span className="ml-3">Home</span> </NavLink></li>
            <li><NavLink className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg" to="/Biodatas"><BiSolidSpa className="w-5 h-5" /> <span className="ml-3">Biodatas</span> </NavLink></li>
            <li><NavLink className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg" to="/AboutUs"> <FaAudible className="w-5 h-5" /> <span className="ml-3"> About Us</span></NavLink></li>
            <li><NavLink className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-lg" to="/ContactUs"><MdContacts className="w-5 h-5" /> <span className="ml-3">Contact Us</span> </NavLink></li>
            
            
            <li> 
              <button className="flex items-center ml-2 btn-sm p-2 text-gray-700 bg-orange-300 hover:bg-gray-200 rounded-lg"> 
                <FaSignInAlt className="w-5 h-5" /><span className="ml-3">
                  <LogOut></LogOut></span></button></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
