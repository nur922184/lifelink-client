import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

const SuccessStoryForm = () => {
    const [formData, setFormData] = useState({
        selfBiodataId: "",
        partnerBiodataId: "",
        coupleImage: "",
        successStory: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://final-project-server-tau-jade.vercel.app/success-stories", formData);
            if (response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Success story submitted successfully!",
                    timer: 3000,
                    timerProgressBar: true,
                });

                setFormData({
                    selfBiodataId: "",
                    partnerBiodataId: "",
                    coupleImage: "",
                    successStory: "",
                });
            }
        } catch (error) {
            console.error("Error submitting success story:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to submit the success story. Please try again.",
                footer: "Make sure all fields are filled correctly.",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white dark:text-white dark:bg-gray-800 shadow-md h-screen rounded-lg space-y-6">
            <div>
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2 ">Self Biodata ID:</label>
                <input
                    type="text"
                    value={formData.selfBiodataId}
                    onChange={(e) => setFormData({ ...formData, selfBiodataId: e.target.value })}
                    required
                    className="w-full border dark:bg-gray-900 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2 dark:text-white">Partner Biodata ID:</label>
                <input
                    type="text"
                    value={formData.partnerBiodataId}
                    onChange={(e) => setFormData({ ...formData, partnerBiodataId: e.target.value })}
                    required
                    className="w-full border dark:bg-gray-900 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2 dark:text-white">Couple Image Link:</label>
                <input
                    type="text"
                    value={formData.coupleImage}
                    onChange={(e) => setFormData({ ...formData, coupleImage: e.target.value })}
                    required
                    className="w-full border dark:bg-gray-900 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2 dark:text-white">Success Story:</label>
                <textarea
                    value={formData.successStory}
                    onChange={(e) => setFormData({ ...formData, successStory: e.target.value })}
                    required
                    className="w-full border dark:bg-gray-900 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent h-32 resize-none"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
                Submit
            </button>
        </form>

    );
};

export default SuccessStoryForm;
