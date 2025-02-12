import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import WhyCourse from "../components/WhyCourse";

const HomeLayout = () => {
  const [addToCard, setAddToCard] = useState([]);
  const addCardItem = (item) => {
    setAddToCard((cartItem) => [...cartItem, item]);
  };

  return (
    <div className="font-poppins">
      <Helmet><title>Career Kindle | Home</title></Helmet>
      <div className="max-w-[100rem] mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center items-center mt-10">
      <Outlet context={{
        addToCard,
        addCardItem,
      }}></Outlet>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
