import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecurePublic from '../../Hooks/useAxiosSecurePublic';

const SocialLogin = () => {
    const { continueToGoogle } = useContext(AuthContext);
    const  axiosPublic  = useAxiosSecurePublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        continueToGoogle()
            .then(result => {
                console.log(result.user);

                // Correctly accessing displayName from result.user
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName // Fixed here
                };

                // Posting user info to the server
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    });

                // Navigate to the intended route
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error("Google Sign-In failed:", err);
            });
    }
    return (
        <div className="p-4 ">
            <div>
                <div className="divider dark:divide-white divide-2"></div>
                <button onClick={handleGoogleSignIn} className="btn dark:bg-slate-500 dark:text-white">
                    <FcGoogle size={20} className="mr-2" />
                    Continue to google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;