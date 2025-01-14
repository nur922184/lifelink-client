import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignOut from '../../Component/SignOut/SignOut';
import useAuth from '../../Hooks/useAuth';
import Toggle from '../../Component/Toggle/Toggle';
import logo from '../../assets/Images/large (2).png'
import { FaAudible, FaHome } from 'react-icons/fa';
import { BiSolidSpa } from 'react-icons/bi';
import { MdContacts, MdDashboard } from 'react-icons/md';
import { SlMenu } from 'react-icons/sl';

const Navbar = () => {
    const { user } = useAuth();
    const NavOptions = <>
        <li><NavLink to="/"><FaHome /> Home</NavLink></li>
        <li><NavLink to="/Biodatas"><BiSolidSpa /> Biodatas</NavLink></li>
        <li><NavLink to="/AboutUs"> <FaAudible /> About Us</NavLink></li>
        <li><NavLink to="/ContactUs"><MdContacts /> Contact Us</NavLink></li>

        {
            user ? <>
                <li><NavLink to="/dashboard"><MdDashboard /> Dashboard</NavLink></li>
                {/* <span>{user?.displayName}</span> */}
            </> : <>

            </>
        }

    </>
    return (
        <div>
            <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-teal-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                           <SlMenu></SlMenu>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content items-center bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavOptions}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className='w-36 h-16' src={logo} alt="" />
                    </Link>
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