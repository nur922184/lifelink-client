import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import MainLayout from '../Layout/MainLayout';
import Error from '../Shared/Error/Error';
import SignUp from '../Pages/SignUP/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import AboutUs from '../Pages/About Us/AboutUs';
import ContactPage from '../Pages/Contact Us/ContactPage';
import DashboardLayout from '../Layout/DashboardLayout';
import DashBoard from '../Pages/Dashboard/DashBoard';
import PrivateRoute from './PrivateRoute';
import BiodataPage from '../Pages/Biodatas/BiodataPage';
import BiodataDetailsPage from '../Pages/Biodatas/BiodataDetailsPage';
import CheckoutPage from '../Pages/Biodatas/CheckoutPage';


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
                element: <BiodataPage></BiodataPage>,
            },
            {
                path: "/profile/:id",
                element: <PrivateRoute><BiodataDetailsPage></BiodataDetailsPage></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/biodata/${params.id}`)
            },
            {
                path: "/checkout/:id",
                element:<PrivateRoute> <CheckoutPage></CheckoutPage></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/biodata/${params.id}`)
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
            {
                path: "/dashboard",
                element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                children: [
                    {
                        path: "/dashboard",
                        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute> ,
                    },
                ]
            },
        ]
    }, 
    {
        path: "*",
        element: <Error></Error>,
    }
]);

export default Router;






