import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lotte-json/Animation-login.json";
import useAuth from '../../Hooks/useAuth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import SignINImage from '../../assets/Images/desktop-wallpaper-admin-login.jpg'
import logo from '../../assets/Images/logo-LifeLink.png'
import Swal from 'sweetalert2';
const SignIn = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // console.log('state in the location login pages', location.state)
    const { SignIn } = useAuth()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        SignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Login has been successful!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Login Failed",
                    text: "Incorrect email or password. Please try again.",
                    showConfirmButton: true,
                });
            });
    };
    


    return (
        <div style={{
            backgroundImage: `url(${SignINImage})`,
        }}
        className="hero dark:bg-gray-900 dark:text-white bg-base-200 min-h-screen">
            <Helmet>
                <title>Life Link  | Sign In</title>
            </Helmet>
            <div className="hero-content  flex-col-reverse md:flex-row-reverse">
                <div 
                    className="card bg-base-75 bg-center bg-cover text-white md:w-[40%] shadow-2xl">
                    <div className='text-center px-5'>
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                       <img className='w-36 h-24 mt-4 m-auto' src={logo} alt="" />
                    </div>
                    <form onSubmit={handleLogin} className="card-body text-white">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-cyan-100">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="email"
                                className="input input-bordered dark:bg-gray-800 dark:text-white text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-cyan-100">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'}
                                name="password"
                                placeholder="password" className="input input-bordered dark:bg-gray-800 dark:text-white text-black" required />
                            <div onClick={() => setShow(!show)} className='w-10 absolute right-6 top-[350px] text-orange-700 '>
                                {
                                    show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-cyan-100">Forgot password?</a>
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
                            <input disabled={false} className="btn bg-violet-300" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='px-6'><small>New Here? <Link className='text-blue-700 text-sm font-bold' to="/signup"> Create an account</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>

                <div className="text-center md:w-1/2 lg:text-left">
                    <div className="text-center m-auto  w-3/4 dark:text-white">
                        <Lottie animationData={groovyWalkAnimation} loop={true} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignIn;