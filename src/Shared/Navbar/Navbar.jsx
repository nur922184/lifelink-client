import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOut from '../../Component/SignOut/SignOut';
import useAuth from '../../Hooks/useAuth';
import Toggle from '../../Component/Toggle/Toggle';
import logo from '../../assets/Images/large (2).png'

const Navbar = () => {
    const {user} = useAuth();
    const NavOptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Biodatas">Biodatas</NavLink></li>
        <li><NavLink to="/AboutUs"> About Us</NavLink></li>
        <li><NavLink to="/ContactUs">Contact Us</NavLink></li>

        {
            user ? <>
             <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                {/* <span>{user?.displayName}</span> */}
            </> : <>

            </>
        }

    </>
    return (
        <div>
            <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content items-center bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavOptions}
                        </ul>
                    </div>
                    <img className='w-36 h-16' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Toggle></Toggle>
                  <SignOut></SignOut>
                </div>
            </div>
        </div>
    );
};

export default Navbar; 