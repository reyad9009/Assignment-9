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

      <Outlet></Outlet>
      <div className="max-w-[100rem] mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
