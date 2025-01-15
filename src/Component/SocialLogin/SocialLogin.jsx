import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SocialLogin = () => {
    const { continueToGoogle } = useContext(AuthContext) ;
    const navigate =useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        continueToGoogle()
        .then(result =>{
            console.log(result.user); 
            // const userInfo = {
            //     email: result.user?.email, 
            //     name: result.name?.displayName
            // }
            // axiosPublic.post('/users', userInfo)
            // .then(res =>{
            //     console.log(res.data)
               
            // })
            navigate(from, { replace: true });
        })
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