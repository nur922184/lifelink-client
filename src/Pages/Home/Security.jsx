import React from 'react';
import { FaLock, FaShieldAlt } from 'react-icons/fa';

const Security = () => {
    return (
        <div>
            {/* Security & Privacy Section */}
            <section className="py-16 bg-gray-900 text-white mt-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Safe & Secure Platform</h2>
                    <p className="mb-12 text-gray-300">Your privacy and security are our top priorities. We ensure your data is encrypted and securely stored.</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl text-center">
                            <FaShieldAlt className="text-purple-400 text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Data Protection</h3>
                            <p className="text-gray-300">We use advanced encryption to keep your personal data safe.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl text-center">
                            <FaLock className="text-purple-400 text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Secure Messaging</h3>
                            <p className="text-gray-300">All messages and calls are end-to-end encrypted for privacy.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl text-center">
                            <FaShieldAlt className="text-purple-400 text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Verified Profiles</h3>
                            <p className="text-gray-300">We ensure genuine connections by verifying profiles and reducing fake accounts.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Security;