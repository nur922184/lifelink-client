import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 dark:text-white py-12">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900 dark:bg-gray-800 shadow-lg p-6 rounded-lg transition-colors">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold">
              1
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
            Create a Biodata
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Fill in your details to create a biodata. Your biodata will be visible to other users on the platform.
          </p>
        </div>
  
        {/* Step 2 */}
        <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900 dark:bg-gray-800 shadow-lg p-6 rounded-lg transition-colors">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold">
              2
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
            Search & Filter Profiles
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Use filters like age, division, and biodata type to find the perfect match for you or your family.
          </p>
        </div>
  
        {/* Step 3 */}
        <div className="bg-gradient-to-b from-black via-gray-900 to-purple-900 dark:bg-gray-800 shadow-lg p-6 rounded-lg transition-colors">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold">
              3
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
            Connect & Request Contact Info
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Request contact information or send messages to start meaningful conversations and find your match.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default HowItWorks;
