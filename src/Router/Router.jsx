import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import MainLayout from '../Layout/MainLayout';
import Error from '../Shared/Error/Error';
import SignUp from '../Pages/SignUP/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import AboutUs from '../Pages/About Us/AboutUs';
import Biodatas from '../Pages/Biodatas/Biodatas';
import ContactPage from '../Pages/Contact Us/ContactPage';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/AboutUs",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/Biodatas",
                element: <Biodatas></Biodatas>,
            },
            {
                path: "/ContactUs",
                element: <ContactPage></ContactPage>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
            },
        ]
    }, 
    {
        path: "*",
        element: <Error></Error>,
    }
]);

export default Router;






