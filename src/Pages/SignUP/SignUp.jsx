
import SocialLogin from '../../Component/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lotte-json/Animation-singup.json";
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import logo from '../../assets/Images/logo-LifeLink.png'
import SignUpImage from '../../assets/Images/desktop-wallpaper-admin-login.jpg'
import useAxiosSecurePublic from '../../Hooks/useAxiosSecurePublic';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [show, setShow] = useState(false)
    const { crateNewUser, UpdateUserProfile } = useAuth()
    const { axiosPublic } = useAxiosSecurePublic();
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        crateNewUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                UpdateUserProfile(data.name, data.PhotoURL)
                    .then(() => {
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your profile update has been success",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/")
                        // crate user entry in the database
                        // const userInfo = {
                        //     name: data.name,
                        //     email: data.email
                        // }
                        // axiosPublic.post('/users', userInfo)
                        //     .then(res => {
                        //         if (res.data.insertedId) {
                        //             console.log('user added to the database')
                        //             reset();
                        //             Swal.fire({
                        //                 position: "top-end",
                        //                 icon: "success",
                        //                 title: "Your profile update has been success",
                        //                 showConfirmButton: false,
                        //                 timer: 1500
                        //             });
                        //             navigate("/")
                        //         }
                        //     })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div style={{
            backgroundImage: `url(${SignUpImage})`,
        }}

            className="hero bg-base-200 min-h-screen text-slate-50">
            <Helmet>
                <title>Life Link | Sign Up</title>
            </Helmet>
            <div className=" hero-content justify-around flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <div className="text-center m-auto w-3/4">
                        <Lottie animationData={groovyWalkAnimation} loop={true} />;
                    </div>
                </div>
                <div className=" text-white card bg-base-70 md:w-[40%] shadow-2xl">
                    <div className='text-center px-5'>
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <img className='w-36 h-24 mt-4 m-auto' src={logo} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-cyan-100">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("name", { required: "Name is required" })}
                                className="dark:bg-gray-800 dark:text-white text-black input input-bordered"
                            />
                            {errors.name && (
                                <p className="text-red-500 dark:text-white">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Photo URL Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-cyan-100">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Photo URL"
                                {...register("PhotoURL", { required: "Photo URL is required" })}
                                className="input input-bordered dark:bg-gray-800 dark:text-white text-black "
                            />
                            {errors.PhotoURL && (
                                <p className="text-red-500">{errors.PhotoURL.message}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-cyan-100">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                                className="input input-bordered bg-gray-800 text-white "
                            />
                            {errors.email && (
                                <p className="text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-cyan-100">Password</span>
                            </label>
                            <input
                                type={show ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                                className="input input-bordered bg-gray-800 text-white  "
                            />
                            <div
                                onClick={() => setShow(!show)}
                                className="w-10 absolute right-6 top-[520px] text-orange-700 cursor-pointer"
                            >
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </div>
                            {errors.password && (
                                <p className="text-red-500">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <input
                                className="btn bg-violet-300"
                                type="submit"
                                value="Sign up"
                            />
                        </div>
                    </form>
                    <p className="px-6" ><small>Already have an account<Link to="/signin" className="text-blue-700 text-sm font-bold"> login now</Link> </small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;