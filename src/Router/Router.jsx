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
import PrivateRoute from './PrivateRoute';
import BiodataPage from '../Pages/Biodatas/BiodataPage';
import BiodataDetailsPage from '../Pages/Biodatas/BiodataDetailsPage';
import CheckoutPage from '../Pages/Biodatas/CheckoutPage';
import Favourites from '../Pages/Dashboard/Favourites';
import ManageUsers from '../Pages/Dashboard/AdminDashboard/ManageUsers';
import AllUsers from '../Pages/Dashboard/AdminDashboard/AllUsers';
import EditBiodata from '../Pages/Dashboard/UsesDashboard/EditBiodata';
import BiodataForm from '../Pages/Dashboard/UsesDashboard/BiodataForm';
import BiodataFetcher from '../Pages/Dashboard/UsesDashboard/BiodataFetcher';
import ViewBiodata from '../Pages/Dashboard/UsesDashboard/ViewBiodata';



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
                loader: ({ params }) => fetch(`http://localhost:5000/biodata/${params.id}`)
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute> <CheckoutPage></CheckoutPage></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/biodata/${params.id}`)
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
        path: "dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path:'favourites',
                element: <Favourites></Favourites>,
            },
            {
                path:'editBiodata',
                element:<BiodataFetcher></BiodataFetcher>
            },
            {
                path:'addbiodata',
                element:<BiodataForm></BiodataForm>
                // element:<ViewBiodata></ViewBiodata>
                
             
            },
            {
                path:'view',
                element:<BiodataFetcher></BiodataFetcher>
             
            },
            {
                path:'edit-profile/:id',
                element:<EditBiodata></EditBiodata>, 
                loader:({ params }) => fetch(`http://localhost:5000/biodata/${params.id}`)
             
            },



            // admin related
            {
                path:'manage',
                element:<ManageUsers></ManageUsers>
            },
            {
                path:'allUsers',
                element:<AllUsers></AllUsers>
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>,
    }
]);

export default Router;






