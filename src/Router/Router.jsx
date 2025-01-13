import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import MainLayout from '../Layout/MainLayout';
import Error from '../Shared/Error/Error';
import Loading from '../Shared/Loading/Loading';
import SignUp from '../Pages/SignUP/SignUp';
import SignIn from '../Pages/SignIn/SignIn';

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
                path: "/l",
                element: <Loading></Loading>,
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






