import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const NewsletterModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Subscribed successfully with: ${email}`,
            showConfirmButton: false,
            timer: 3000
          });
        setEmail(""); // Clear input after submission
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900 p-6 rounded-lg text-white shadow-lg w-full max-w-lg relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-300 hover:text-white">
                    <FaTimes size={20} />
                </button>

                {/* Modal Content */}
                <div className="text-center">
                    {/* Email Input */}
                    <div className="bg-gradient-to-b mt-3 mb-5 from-purple-900 via-gray-900 to-gray-700 p-6 rounded-lg text-white shadow-lg max-w-md mx-auto">
                        <h6 className="text-xl font-semibold text-center mb-4">Subscribe to Our Newsletter</h6>
                        <p className="text-gray-300 text-center mb-4">Get the latest updates and offers directly in your inbox!</p>
                        <form  onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center gap-2">
                            <input
                                type="email"
                                
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                            />
                            <button
                                className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded transition duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterModal;
