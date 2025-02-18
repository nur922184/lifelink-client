import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/Images/large (2).png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            {/* Main Footer Section */}
            <div className="bg-gradient-to-b from-purple-900 via-gray-900 to-black dark:bg-opacity-30 text-gray-200 p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-screen-xl mx-auto">
                    {/* Company Info */}
                    <aside>
                        <img className='w-44 h-24 mb-3' src={logo} alt="LifeLink Logo" />
                        <p className="text-gray-400 text-sm">Your trusted partner in finding meaningful relationships.</p>
                    </aside>
                    
                    {/* Navigation Links */}
                    <div className='flex gap-5 mx-auto mt-5'>
                        <NavLink className='hover:text-yellow-200 hover:underline' to="/">Home</NavLink>
                        <NavLink className='hover:text-yellow-200 hover:underline' to="/Biodatas">Biodatas</NavLink>
                        <NavLink className='hover:text-yellow-200 hover:underline' to="/AboutUs">About Us</NavLink>
                        <NavLink className='hover:text-yellow-200 hover:underline' to="/ContactUs">Contact Us</NavLink>
                    </div>

                    {/* Newsletter Subscription */}
                  
                    {/* Contact Info */}
                    <div>
                        <h6 className="text-lg font-semibold text-center mb-4">Contact Us</h6>
                        <p className="text-gray-400 text-sm">Phone: +880 1234-567890</p>
                        <p className="text-gray-400 text-sm">Email: support@lifelink.com</p>
                        <p className="text-gray-400 text-sm">Address: Dhaka, Bangladesh</p>
                    </div>

                    {/* Social Links */}
                    <nav>
                        <h6 className="text-lg font-semibold text-center mb-4">Follow Us</h6>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaYoutube />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaFacebook />
                            </a>
                        </div>
                    </nav>
                </div>
                
                {/* Copyright */}
                <div className="text-gray-400 text-center p-4 border-t border-gray-700 mt-6">
                    <p>
                        Copyright © {new Date().getFullYear()} - All rights reserved
                        by Life Link.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
