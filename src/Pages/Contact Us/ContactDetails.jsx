import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactDetails = () => {
    return (
        <div className="space-y-4 mt-10">
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
                If you have any questions or need further information, feel free to reach out to us.
            </p>
            <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-purple-600 text-2xl" />
                <p className="text-gray-700">123 LifeLink Street, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-purple-600 text-2xl" />
                <p className="text-gray-700">+880 123-456-7890</p>
            </div>
            <div className="flex items-center space-x-4">
                <FaEnvelope className="text-purple-600 text-2xl" />
                <p className="text-gray-700">info@lifelink.com</p>
            </div>
        </div>
    );
};

export default ContactDetails;