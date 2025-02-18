import React from 'react';
import { FaCodePullRequest } from 'react-icons/fa6';
import { IoPersonAdd } from 'react-icons/io5';
import { MdOutlineCreateNewFolder, MdPersonSearch } from 'react-icons/md';

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 max-w-[1496px] mx-auto  dark:bg-gray-900 dark:text-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900 dark:bg-gray-800 shadow-lg p-6 rounded-lg transition-colors">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-800 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold">
                <IoPersonAdd />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-400 dark:text-gray-100 mb-4">
              Create a Biodata
            </h3>
            <p className="text-gray-300 dark:text-gray-200">
              Fill in your details to create a biodata. Your biodata will be visible to other users on the platform.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900 dark:bg-gray-800 shadow-lg p-6 rounded-lg transition-colors">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-800 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold">
                <MdPersonSearch size={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-400 dark:text-gray-100 mb-4">
              Search & Filter Profiles
            </h3>
            <p className="text-gray-300 dark:text-gray-200">
              Use filters like age, division, and biodata type to find the perfect match for you or your family.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900 dark:bg-gray-800 shadow-lg p-6 rounded-lg transition-colors">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-800 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold">
                <FaCodePullRequest />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-400 dark:text-gray-100 mb-4">
              Connect & Request Contact Info
            </h3>
            <p className="text-gray-300 dark:text-gray-200">
              Request contact information or send messages to start meaningful conversations and find your match.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HowItWorks;
