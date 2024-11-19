import React, { useState } from "react";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";
import CategoryNavbar from "../pages/CategoryNavbar";
import Services from "../pages/Services";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to 'All'

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Banner></Banner>
      <div className="flex flex-col justify-center items-center my-16 gap-10">
        <CategoryNavbar onCategorySelect={handleCategorySelect} />
        <Services selectedCategory={selectedCategory} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
