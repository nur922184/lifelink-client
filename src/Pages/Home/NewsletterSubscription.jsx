import React, { useState } from "react";
import NewsletterModal from "../../Component/NewsletterModal";
import animation from '../../assets/Images/sub.gif'

const NewsletterSubscription = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div
            style={{
                backgroundImage: `url(${animation})`,
            }}
            className="min-h-96 flex flex-col justify-center items-center bg-gray-900 text-white">
            <button
                onClick={() => setModalOpen(true)}
                className="border border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 px-4 py-4 rounded-lg text-lg transition duration-300"
            >
                Open Newsletter Modal
            </button>

            {/* Newsletter Modal */}
            <NewsletterModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};
export default NewsletterSubscription;
