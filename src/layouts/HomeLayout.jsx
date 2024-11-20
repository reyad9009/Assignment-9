import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <div className="max-w-[100rem] mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center items-center mt-10">
      <Outlet></Outlet>
      </div>
      <div className="max-w-[100rem] mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
