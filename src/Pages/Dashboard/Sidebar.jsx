import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTachometerAlt, FaClipboard, FaEnvelope, FaUser, FaHome, FaAudible } from "react-icons/fa";
import LogOut from "../../Component/SignOut/LogOut";
import { BiSolidSpa } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import useBioDetails from "../../Hooks/useBioDetails";
import useAdmin from "../../Hooks/useAdmin";
import logo from '../../assets/Images/logo-LifeLink.png'
import { BsFileEarmarkRuled } from "react-icons/bs";
import { FaBookBookmark } from "react-icons/fa6";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Todo  :
  const [isAdmin] = useAdmin();

  const [BioDetails] = useBioDetails()
  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-6 left-4 z-50 bg-teal-900 bg-opacity-15 dark:bg-opacity-15 dark:bg-red-600 dark:text-white text-gray-950 p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>
  
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 dark:text-white w-64 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="flex items-center p-4  border-b">
          <img className="w-16 h-14" src={logo} alt="" />
          <span className="ml-2 text-lg font-bold text-gray-800 dark:text-white">Dashboard</span>
        </div>
  
        {/* Menu Links */}
        <nav className="mt-2 mb-2">
          <ul className="space-y-1">
            {isAdmin ? (
              <>
                {/* Admin menu */}
                <li>
                  <NavLink
                    to="/dashboard/adminDashboard"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`
                    }
                  >
                    <FaTachometerAlt className="w-5 h-5" />
                    <span className="ml-3">Admin Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`
                    }
                  >
                    <FaClipboard className="w-5 h-5" />
                    <span className="ml-3">Manage Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allUsers"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`
                    }
                  >
                    <FaClipboard className="w-5 h-5" />
                    <span className="ml-3">All Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/ApprovedPremium"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`
                    }
                  >
                    <FaEnvelope className="w-5 h-5" />
                    <span className="ml-3">Approved Premium</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/ApprovedContactRequest"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`
                    }
                  >
                    <FaUser className="w-5 h-5" />
                    <span className="ml-3">Approved Contact Request</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {/* User menu */}
                <li>
                  <NavLink
                    to="/dashboard/editBiodata"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`
                    }
                  >
                    <FaTachometerAlt className="w-5 h-5" />
                    <span className="ml-3">Edit Biodata</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/viewBiodata"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`
                    }
                  >
                    <FaClipboard className="w-5 h-5" />
                    <span className="ml-3">View Biodata</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/favourites"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`
                    }
                  >
                    <FaBookBookmark className="w-5 h-5" />
                    <span className="ml-3">Favourites Biodata</span>
                    <div className="badge badge-secondary ml-8">
                      {BioDetails?.length || 0}
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/view"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`
                    }
                  >
                    <FaUser className="w-5 h-5" />
                    <span className="ml-3">My Contact Request</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/married"
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`
                    }
                  >
                    <BsFileEarmarkRuled className="w-5 h-5" />
                    <span className="ml-3">Got Married</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
  
        <hr />
        <nav className="mt-2 ">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`
                }
              >
                <FaHome className="w-5 h-5" />
                <span className="ml-3">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Biodatas"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`
                }
              >
                <BiSolidSpa className="w-5 h-5" />
                <span className="ml-3">Biodatas</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AboutUs"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`
                }
              >
                <FaAudible className="w-5 h-5" />
                <span className="ml-3">About Us</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ContactUs"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`
                }
              >
                <MdContacts className="w-5 h-5" />
                <span className="ml-3">Contact Us</span>
              </NavLink>
            </li>
  
            <li>
              <LogOut></LogOut>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
  
};

export default Sidebar;
