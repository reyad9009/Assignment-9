import React, { useState } from "react";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";
import CategoryNavbar from "../pages/CategoryNavbar";
import Services from "../pages/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="flex flex-col justify-center items-center my-16 gap-10">
        <CategoryNavbar />
        <Services />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
