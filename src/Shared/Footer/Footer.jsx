import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/Images/large (2).png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            {/* Main Footer Section */}
            <div className="bg-gray-800 text-gray-200 p-2">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-screen-xl mx-auto">
                    {/* Company Info */}
                    <aside>
                        <img className='w-44 h-24 mb-3' src={logo} alt="" />
                    </aside>

                    <div className='flex gap-5 mx-auto mt-5'>
                        <NavLink className='hover:text-yellow-200 hover:underline' to="/">Home</NavLink>
                        <NavLink className='hover:text-yellow-200 hover:underline' to="/Biodatas">Biodatas</NavLink>
                        <NavLink className='hover:text-yellow-200 hover:underline' to="/AboutUs"> About Us</NavLink>
                        <NavLink className='hover:text-yellow-200 hover:underline' to="/ContactUs">Contact Us</NavLink>
                    </div>

                    {/* Social Links */}
                    <nav>
                        <h6 className="text-lg font-semibold text-center mb-4">Social</h6>
                        <div className="flex gap-4">
                            {/* Twitter */}
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaTwitter></FaTwitter>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaYoutube></FaYoutube>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaFacebook></FaFacebook>
                            </a>
                        </div>
                    </nav>
                </div>
       
                <div className="text-gray-400 text-center p-4">
                    <p>
                        Copyright © {new Date().getFullYear()} - All rights reserved
                        by Life Link.
                    </p>
                </div>
            </div>

            {/* Footer Bottom Section */}

        </footer>
    );
};

export default Footer;
