import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

const LogOut = () => {
    const { Logout, setLoading } = useAuth(); // setLoggingOut ফ্ল্যাগ ব্যবহার
    const navigate = useNavigate();

    const handleLogOut = () => {
        setLoading(true); // লগআউট প্রসেস শুরু হচ্ছে, ফ্ল্যাগ সেট করা
        Logout()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You have successfully logged out',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/'); // হোম পেজে নেভিগেট করা
            })
            .catch((error) => console.error('Logout failed:', error))
            .finally(() => {
                setLoading(false); // লগআউট প্রসেস শেষ
            });
    }
    return (
        <div>
            <button
                className="flex items-center ml-2 btn-sm p-2 text-gray-700 bg-orange-300 hover:bg-gray-200 rounded-lg"
                onClick={handleLogOut}
            >
                <FaSignInAlt className="w-5 h-5" />
                <span className="ml-3">Log Out</span>
            </button>
        </div>
    );
};

export default LogOut;
