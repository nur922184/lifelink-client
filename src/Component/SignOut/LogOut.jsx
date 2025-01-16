import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

const LogOut = () => {
    const { Logout } = useAuth();
    const navigate = useNavigate();
    const handleLogOut = () => {
        Logout()
            .then(() => {
                console.log('Logged out successfully');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Log Out has been success",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/")

            })
            .catch(error => console.error(error));
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