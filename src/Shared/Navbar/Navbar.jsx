import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOut from '../../Component/SignOut/SignOut';
import useAuth from '../../Hooks/useAuth';
import Toggle from '../../Component/Toggle/Toggle';

const Navbar = () => {
    const { user } = useAuth();

    const NavOptions = (
        <>
            <li className="mx-2">
                <NavLink to="/" className="text-gray-700 hover:text-blue-600">Home</NavLink>
            </li>
            <li className="mx-2">
                <NavLink to="/order/salad" className="text-gray-700 hover:text-blue-600">Order Food</NavLink>
            </li>
            {user ? (
                <>
                    <li className="mx-2">
                        <span className="text-gray-700 font-bold">Monir</span>
                    </li>
                </>
            ) : (
                <>
                    <li className="mx-2">
                        <NavLink to="/signup" className="text-gray-700 hover:text-blue-600">Sign Up</NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="w-full bg-white shadow-md fixed z-10">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
                {/* Navbar Start */}
                <div className="flex items-center">
                    <div className="dropdown lg:hidden">
                        <button className="btn btn-ghost" aria-label="Menu">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul className="dropdown-content mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                            {NavOptions}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold text-gray-800">Bistro Boss</a>
                </div>

                {/* Navbar Center */}
                <div className="hidden lg:flex">
                    <ul className="flex space-x-6">{NavOptions}</ul>
                </div>

                {/* Navbar End */}
                <div className="flex items-center gap-4">
                    <Toggle />
                    <SignOut />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
