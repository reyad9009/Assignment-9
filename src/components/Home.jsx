import React, { useState } from "react";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";
import CategoryNavbar from "../pages/CategoryNavbar";
import Services from "../pages/Services";
import WhyCourse from "./WhyCourse";

const Home = () => {
  return (
    <div className="font-poppins">
      <div className="flex justify-center items-center">
      <Banner></Banner>
      </div>
      <div className="flex flex-col justify-center items-center my-16 gap-10">
        <CategoryNavbar />
        <Services />
        <Outlet />
      </div>
      <div className="font-poppins">
        <WhyCourse></WhyCourse>
      </div>
    </div>
  );
};

export default Home;
