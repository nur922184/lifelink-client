import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rahim Ahmed",
            feedback: "LifeLink helped me find my perfect match! The experience was seamless and secure.",
            rating: 5
        },
        {
            name: "Sadia Islam",
            feedback: "A great platform with amazing features. I felt safe using it.",
            rating: 4
        },
        {
            name: "Tanvir Hossain",
            feedback: "The VIP membership was worth it. Excellent service and verified profiles!",
            rating: 5
        }
    ];
    return (
        <section className="dark:py-16 py-5 dark:bg-gray-800 dark:text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">What Our Users Say</h2>
                <p className="mb-12 dark:text-gray-300">Real stories from people who found love through LifeLink.</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((review, index) => (
                        <div key={index} className="bg-gradient-to-b from-purple-900 via-gray-900 to-black opacity-80 p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl text-yellow-50 font-semibold mb-2">{review.name}</h3>
                            <p className="text-gray-300 mb-2">"{review.feedback}"</p>
                            <div className="flex justify-center gap-1 text-yellow-400">
                                {[...Array(review.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;