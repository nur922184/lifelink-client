import React from 'react';
import ContactImg from '../../assets/Images/contact-us.jpeg'
import ContactDetails from './ContactDetails';
import { Helmet } from 'react-helmet-async';
const ContactPage = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${ContactImg})`,
            }}
            className="h-full py-16 bg-cover bg-center items-center">
            <Helmet>
                <title>Life Link | Contact Us</title>
            </Helmet>
            {/* className="bg-gray-100 py-16 px-6 md:px-20"> */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className=" mt-7 shadow-2xl p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-lime-800 mb-2">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border opacity-50  rounded-md focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-lime-800 mb-2">Your Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border opacity-50  rounded-md focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-lime-800 mb-2">Your Message</label>
                            <textarea
                                rows="4"
                                placeholder="Write your message here"
                                className="w-full px-4 py-2 border opacity-50 border-gray-900 rounded-md focus:ring focus:ring-blue-200"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 opacity-80 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Details and Map */}
                <div className="flex flex-col space-y-8">
                    {/* Contact Details */}
                    <ContactDetails></ContactDetails>
                    {/* Google Map */}
                    <div className="relative overflow-hidden rounded-lg mr-9 shadow-lg">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8484021038196!2d90.39945271445643!3d23.75087659453986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b85e0f4f0f%3A0x86af4c4b7e4ef6d6!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1696468743123!5m2!1sen!2sbd"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;