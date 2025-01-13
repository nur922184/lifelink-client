import React from 'react';
import { FaHeart } from 'react-icons/fa';


const AboutSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-20 mt-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to <span className="font-semibold text-gray-800">LifeLink</span>, Bangladesh's trusted online platform for finding meaningful relationships and life partners. 
            Our mission is to connect hearts and help people embark on their journey toward love and companionship.
          </p>
          <div className="flex justify-center items-center mt-6">
            <FaHeart className="text-red-500 text-4xl" />
          </div>
        </div>
      </section>
    );
};

export default AboutSection;