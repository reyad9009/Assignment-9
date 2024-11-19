import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home";
import Error from "../error/Error";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import PrivateRout from "./PrivateRout";
import ForgotPassword from "../pages/ForgotPassword";
import CategoryItem from "../pages/CategoryItem";
import Services from "../pages/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/profile',
                element: <PrivateRout>
                    <MyProfile></MyProfile>
                </PrivateRout>
            },
            {
                path: '/auth/forgot-password',
                element: <ForgotPassword></ForgotPassword>
            }
        ]
    }
])

export default router;