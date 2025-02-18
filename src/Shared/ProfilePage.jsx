import { useState } from "react";
import { FaEnvelope, FaEdit } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const ProfilePage = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  // প্রোফাইল আপডেট ফাংশন
  const handleUpdateProfile = async () => {
    if (!user) return;
    try {
      await updateProfile(user, { displayName, photoURL });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Profile Updated Successfully!",
        showConfirmButton: false,
        timer: 1500
      });
      setIsModalOpen(false); // মোডাল বন্ধ করে দাও
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white min-h-screen flex justify-center">
      <div className="max-w-5xl w-full bg-gray-800 p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold mb-6 text-center">Welcome, {user.displayName || "User"}</h2>
        <p className="text-gray-400 text-center mb-8">{user.joinDate || "Member since N/A"}</p>

        {/* Profile Card */}
        <div className="flex items-center justify-between bg-gray-900 p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4">
            <img
              src={user?.photoURL || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-purple-500"
            />
            <div>
              <h3 className="text-2xl font-semibold">{user.displayName || "User Name"}</h3>
              <p className="text-gray-300">{user?.email || "user@example.com"}</p>
            </div>
          </div>
          <button
            className="bg-purple-600 px-4 py-2 text-white rounded-lg flex items-center gap-2"
            onClick={() => setIsModalOpen(true)} // ইডিট বাটনে ক্লিক করলে মোডাল ওপেন হবে
          >
            <FaEdit /> Edit
          </button>
        </div>


        <div className="grid grid-cols-2 gap-6 mt-8">
          <div>
            <label className="text-gray-400">Full Name</label>
            <input
              type="text"
              value={user.displayName || "Your First Name"}
              className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-400">Nick Name</label>
            <input
              type="text"
              value={user.nickName || ""}
              className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-400">Gender</label>
            <input
              type="text"
              value={user?.gender || "Not Specified"}
              className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-400">Country</label>
            <input
              type="text"
              value={user?.country || "Bangladeshi"}
              className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-400">Language</label>
            <input
              type="text"
              value={user?.language || "English"}
              className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-400">Time Zone</label>
            <input
              type="text"
              value={user?.metadata?.lastSignInTime || "Not Specified"}
              className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white"
              disabled
            />
          </div>
        </div>

        <div className="mt-8 bg-gray-900 p-6 rounded-xl shadow-lg">
          <h4 className="text-xl font-semibold mb-4">My Email Address</h4>
          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-purple-400 text-xl" />
            <p className="text-gray-300">{user?.email || "user@example.com"} <span className="text-gray-500">(1 month ago)</span></p>
          </div>
          <button className="bg-purple-600 px-4 py-2 text-white rounded-lg">+ Add Email Address</button>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-semibold mb-4">Update Profile</h3>

              <label className="text-gray-400">Full Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white"
              />

              <label className="text-gray-400 mt-4">Profile Picture URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white"
              />

              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-600 px-4 py-2 rounded-lg text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateProfile}
                  className="bg-purple-600 px-4 py-2 rounded-lg text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};


export default ProfilePage; 