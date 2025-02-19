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
import Dashboard from '../Pages/Dashboard/Dashboard';
import MyContactRequests from '../Pages/Dashboard/UsesDashboard/MyContactRequests';
import EditBiodaata from '../Pages/Dashboard/UsesDashboard/EditBiodaata';
import AdminDahoard from '../Pages/Dashboard/AdminDashboard/AdminDahoard';
import ApprovedContact from '../Pages/Dashboard/AdminDashboard/ApprovedContact';
import ApprovedPremium from '../Pages/Dashboard/AdminDashboard/ApprovedPremium';
import GotMarriedForm from '../Pages/Dashboard/UsesDashboard/GotMarriedForm';
import ProfilePage from '../Shared/ProfilePage';
import DashboardOverview from '../Pages/Dashboard/UsesDashboard/DashboardOverview';




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
                loader: ({ params }) => fetch(`https://final-project-server-tau-jade.vercel.app/biodata/${params.id}`)
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://final-project-server-tau-jade.vercel.app/biodata/${params.id}`)
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
                path:'/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path:'favourites',
                element: <PrivateRoute><Favourites></Favourites></PrivateRoute>,
            },
            {
                path:'editBiodata',
                element:<PrivateRoute><EditBiodaata></EditBiodaata></PrivateRoute>
            },
            {
                path:'viewBiodata',
                element:<PrivateRoute><BiodataFetcher></BiodataFetcher></PrivateRoute>
              
            },
            {
                path:'addbiodata',
                element:<PrivateRoute><BiodataForm></BiodataForm></PrivateRoute>
            },
            {
                path:'overview',
                element:<PrivateRoute><DashboardOverview></DashboardOverview></PrivateRoute>
            },
            {
                path:'view',
                element:<PrivateRoute><MyContactRequests></MyContactRequests></PrivateRoute>
             
            },
            {
                path:'married',
                element:<PrivateRoute><GotMarriedForm></GotMarriedForm></PrivateRoute>
             
            },
            {
                path:'edit-profile/:id',
                element:<PrivateRoute><EditBiodata></EditBiodata> </PrivateRoute>,
                loader:({ params }) => fetch(`https://final-project-server-tau-jade.vercel.app/biodata/${params.id}`)
             
            },



            // admin related
            {
                path:'manage',
                element:<ManageUsers></ManageUsers>
            },
            {
                path:'profile',
                element:<ProfilePage></ProfilePage>
            },
            {
                path:'/dashboard/adminDashboard',
                element:<AdminDahoard></AdminDahoard>
            },
            {
                path:'allUsers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'ApprovedContactRequest',
                element:<ApprovedContact></ApprovedContact>
            },
            {
                path:'ApprovedPremium',
                element:<ApprovedPremium></ApprovedPremium>
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>,
    }
]);

export default Router;






