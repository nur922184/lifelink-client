import { FaEnvelope, FaEdit } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";

const ProfilePage = () => {
    const {user} = useAuth();
    console.log(user)
  return (
<section className="py-16 bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white min-h-screen flex justify-center">
      <div className="max-w-5xl w-full bg-gray-800 p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold mb-6 text-center">Welcome, {user.displayName || "User"}</h2>
        <p className="text-gray-400 text-center mb-8">{user.joinDate || "Member since N/A"}</p>
        
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
          <button className="bg-blue-500 px-4 py-2 text-white rounded-lg flex items-center gap-2">
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
              value={user.nickName || "Your Nick Name"}
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
          <button className="bg-blue-500 px-4 py-2 text-white rounded-lg">+ Add Email Address</button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
