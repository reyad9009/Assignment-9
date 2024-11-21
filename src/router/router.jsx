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
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import MyClass from "../pages/MyClass";
import Faq from "../pages/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../services.json"),
        children: [
          {
            path: "/",
            element: <Services></Services>,
          },
          {
            path: "/category/:category",
            element: <Services />, // Same loader but filtered in Services
          },
        ],
      },
      {
        path: "/services/:service_id",
        element: (
          <PrivateRout>
            <ServiceDetail></ServiceDetail>,
          </PrivateRout>
        ),
        loader: () => fetch("../services.json"),
      },
      {
        path: "/faq",
        element: <Faq></Faq>
      },
      {
        path: "/my-classes",
        element: (
          <PrivateRout>
            <MyClass></MyClass>
          </PrivateRout>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/profile",
        element: (
          <PrivateRout>
            <MyProfile></MyProfile>
          </PrivateRout>
        ),
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
]);

export default router;
