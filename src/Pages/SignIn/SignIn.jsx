import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lotte-json/Animation-login.json";
import useAuth from '../../Hooks/useAuth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
const SignIn = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login pages', location.state)
    const { SignIn } = useAuth()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        SignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // Swal.fire({
                //     position: "top-end",
                //     icon: "success",
                //     title: "Your Login has been success",
                //     showConfirmButton: false,
                //     timer: 1500
                // });
            })
        navigate(from, { replace: true });
    }


    return (
        <div className="hero dark:bg-gray-900 dark:text-white bg-base-200 min-h-screen">
            <Helmet>
                <title>New Project | Sign In</title>
            </Helmet>
            <div className="hero-content  flex-col-reverse md:flex-row-reverse">
                <div className="card bg-base-100 dark:bg-gray-900 dark:text-white md:w-[40%] shadow-2xl">
                    <div className='text-center px-5'>
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <form onSubmit={handleLogin} className="card-body dark:bg-gray-900 dark:text-white">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-cyan-100">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="email"
                                className="input input-bordered dark:bg-gray-800 dark:text-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-cyan-100">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'}
                                name="password"
                                placeholder="password" className="input input-bordered dark:bg-gray-800 dark:text-white" required />
                            <div onClick={() => setShow(!show)} className='w-10 absolute right-6 top-[345px] '>
                                {
                                    show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover dark:text-cyan-100">Forgot password?</a>
                            </label>
                        </div>
                        {/* <div className="form-control">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <input type="text"
                            onBlur={handleValidateCaptcha}
                            name="captcha"
                            placeholder="type the Captcha above" className="input input-bordered" required />
                    </div> */}
                        <div className="form-control mt-6">
                            {/* to do applly disabled */}
                            <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='px-6'><small>New Here? <Link className='text-blue-700 text-sm font-bold' to="/signup"> Create an account</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>

                <div className="text-center md:w-1/2 lg:text-left">
                    <div className="text-center m-auto  w-3/4 dark:bg-gray-900 dark:text-white">
                        <Lottie animationData={groovyWalkAnimation} loop={true} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignIn;