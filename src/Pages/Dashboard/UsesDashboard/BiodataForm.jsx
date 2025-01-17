import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecurePublic from "../../../Hooks/useAxiosSecurePublic";
import useFetchBiodata from "../../../Hooks/useFetchBiodata";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BiodataForm = () => {

    const axiosPublic = useAxiosSecurePublic();
    const axiosSecure = useAxiosSecure()
    const { BioData } = useFetchBiodata()
    const BioID = (BioData.length + 1);
    const { user } = useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        // Create FormData instance
        const formData = new FormData();
        formData.append('image', data.profileImage[0]);

        try {
            // Make POST request
            const res = await axiosPublic.post(image_hosting_api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (res.data.success) {
                const uploadedImageUrl = res.data.data.display_url;

                // Prepare the bio details to send to the server
                const biodata = {
                    id: parseFloat(BioID),
                    type: data.type,
                    name: data.name,
                    profileImage: uploadedImageUrl, // URL of uploaded image
                    dateOfBirth: data.dateOfBirth,
                    height: data.height,
                    weight: data.weight,
                    age: parseFloat(data.age),
                    occupation: data.occupation,
                    race: data.race,
                    fathersName: data.fathersName,
                    mothersName: data.mothersName,
                    permanentDivision: data.permanentDivision,
                    presentDivision: data.presentDivision,
                    expectedPartnerAge: parseFloat(data.expectedPartnerAge),
                    expectedPartnerHeight: data.expectedPartnerHeight,
                    expectedPartnerWeight: data.expectedPartnerWeight,
                    contactEmail: data.contactEmail,
                    mobileNumber: data.mobileNumber,
                };
                const BioRes = await axiosSecure.post('/biodata', biodata);
                console.log(BioRes.data)
                if (BioRes.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You added successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }

            }
            console.log('with image url', res.data); // Check response
        } catch (error) {
            console.error('Error uploading image:', error.response?.data || error.message);
        }
    };


    return (
        <div className="max-w-3xl mx-auto p-5 bg-gray-100 dark:bg-gray-900 dark:text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Biodata Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6">
                {/* Name */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-2 border dark:text-black border-gray-300 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                {/* Biodata Type */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Biodata Type</label>
                    <select
                        {...register("type", { required: "Please select a biodata type" })}
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    >
                        <option value="">Select...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    {errors.type && <span className="text-red-500 text-sm">{errors.type.message}</span>}
                </div>
                {/* Date of Birth */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Date of Birth</label>
                    <input
                        {...register("dateOfBirth", { required: "Date of birth is required" })}
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                    {errors.dateOfBirth && <span className="text-red-500 text-sm">{errors.dateOfBirth.message}</span>}
                </div>

                {/* Height */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Height</label>
                    <input
                        {...register("height", { required: "Height is required" })}
                        type="number"
                        placeholder="Enter height (e.g., 5'10\ '' )"
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                    {errors.height && <span className="text-red-500 text-sm">{errors.height.message}</span>}
                </div>

                {/* Weight */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Weight</label>
                    <input
                        {...register("weight", { required: "Weight is required" })}
                        type="number"
                        placeholder="Enter weight (e.g., 70 kg)"
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                    {errors.weight && <span className="text-red-500 text-sm">{errors.weight.message}</span>}
                </div>


                {/* Occupation */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Occupation</label>
                    <select
                        {...register("occupation", { required: "Occupation is required" })}
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    >
                        <option value="">Select...</option>
                        <option value="Student">Student</option>
                        <option value="Employee">Employee</option>
                        <option value="Lecturer">Lecturer</option>
                        <option value="Self-employed">Self-employed</option>
                    </select>
                    {errors.occupation && <span className="text-red-500 text-sm">{errors.occupation.message}</span>}
                </div>

                {/* Age */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Age</label>
                    <input
                        {...register("age", { required: "Age is required" })}
                        type="number"
                        placeholder="Enter age"
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                    {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
                </div>

                {/* Expected Partner Age */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">
                        Expected Partner Age
                    </label>
                    <input
                        {...register("expectedPartnerAge", {
                            required: "Expected Partner Age is required",
                        })}
                        type="number"
                        placeholder="Enter expected partner age (e.g., 26)"
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                    {errors.expectedPartnerAge && (
                        <span className="text-red-500 text-sm">{errors.expectedPartnerAge.message}</span>
                    )}
                </div>

                {/* Expected Partner Height */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">
                        Expected Partner Height
                    </label>
                    <input
                        {...register("expectedPartnerHeight", {
                            required: "Expected Partner Height is required",
                        })}
                        type="text"
                        placeholder="Enter expected partner height (e.g., 5'10\ '')"
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" />
                    {errors.expectedPartnerHeight && (
                        <span className="text-red-500 text-sm">
                            {errors.expectedPartnerHeight.message}
                        </span>
                    )}
                </div>

                {/* Expected Partner Weight */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">
                        Expected Partner Weight
                    </label>
                    <input
                        {...register("expectedPartnerWeight", {
                            required: "Expected Partner Weight is required",
                        })}
                        type="text"
                        placeholder="Enter expected partner weight (e.g., 75 kg)"
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                    {errors.expectedPartnerWeight && (
                        <span className="text-red-500 text-sm">
                            {errors.expectedPartnerWeight.message}
                        </span>
                    )}
                </div>

                {/* Permanent Division */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Permanent Division</label>
                    <select
                        {...register("permanentDivision", { required: "Permanent division is required" })}
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    >
                        <option value="">Select...</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagra">Chattagra</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                    {errors.permanentDivision && <span className="text-red-500 text-sm">{errors.permanentDivision.message}</span>}
                </div>

                {/* Present Division */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Present Division</label>
                    <select
                        {...register("presentDivision", { required: "Present division is required" })}
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    >
                        <option value="">Select...</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagra">Chattagra</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                    {errors.presentDivision && <span className="text-red-500 text-sm">{errors.presentDivision.message}</span>}
                </div>

                {/* Race */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Race</label>
                    <select
                        {...register("race", { required: "Race is required" })}
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    >
                        <option value="">Select...</option>
                        <option value="Fair">Fair</option>
                        <option value="Medium">Medium</option>
                        <option value="Dark">Dark</option>
                    </select>
                    {errors.race && <span className="text-red-500 text-sm">{errors.race.message}</span>}
                </div>

                {/* Father's Name */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Father's Name</label>
                    <input
                        {...register("fathersName", { required: "Father's name is required" })}
                        type="text"
                        placeholder="Enter father's name"
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                    {errors.fathersName && <span className="text-red-500 text-sm">{errors.fathersName.message}</span>}
                </div>

                {/* Mother's Name */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Mother's Name</label>
                    <input
                        {...register("mothersName", { required: "Mother's name is required" })}
                        type="text"
                        placeholder="Enter mother's name"
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                    {errors.mothersName && <span className="text-red-500 text-sm">{errors.mothersName.message}</span>}
                </div>

                {/* Contact Email */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Contact Email</label>
                    <input
                        {...register("contactEmail", { required: "Contact email is required" })}
                        type="email"
                        defaultValue={user.email}
                        placeholder="Enter contact email"
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        readOnly
                    />
                </div>

                {/* Mobile Number */}
                <div>
                    <label className="block font-medium mb-2 text-sm sm:text-base">Mobile Number</label>
                    <input
                        {...register("mobileNumber", { required: "Mobile number is required" })}
                        type="number"
                        placeholder="Enter mobile number"
                        className="w-full p-2 border border-gray-300 rounded dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                    {errors.mobileNumber && <span className="text-red-500 text-sm">{errors.mobileNumber.message}</span>}
                </div >
                {/* Profile Image */}
                <div className="mb-5">
                    <label className="block font-medium mb-2 text-sm sm:text-base">Profile Image</label>
                    <input
                        {...register("profileImage", { required: "Profile image link is required" })}
                        type="file" className="file-input file-input-bordered w-full dark:text-black max-w-xs" />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 sm:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
                    >
                        Submit
                    </button>
                </div>
            </form>


        </div>
    );
};

export default BiodataForm;
