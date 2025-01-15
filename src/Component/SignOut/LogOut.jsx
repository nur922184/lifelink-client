import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

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
            <button onClick={handleLogOut}
            > Logout
            </button>
        </div>
    );
};

export default LogOut;