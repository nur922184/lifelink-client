import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            {/* Main Footer Section */}
            <div className="bg-gray-800 text-gray-200 p-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-screen-xl mx-auto">
                    {/* Company Info */}
                    <aside>
                        <p className="text-lg font-semibold">
                            ACME Industries Ltd.
                        </p>
                        <p>Providing reliable tech since 1992</p>
                    </aside>

                    {/* Social Links */}
                    <nav>
                        <h6 className="text-lg font-semibold mb-4">Social</h6>
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
                <div className=" text-gray-400 text-center p-4">
                    <p>
                        Copyright © {new Date().getFullYear()} - All rights reserved
                        by ACME Industries Ltd.
                    </p>
                </div>
            </div>

            {/* Footer Bottom Section */}

        </footer>
    );
};

export default Footer;
