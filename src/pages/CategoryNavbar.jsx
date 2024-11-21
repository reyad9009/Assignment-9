import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../category.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center text-5xl font-bold mb-14">Our Services</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-4 gap-6 lg:gap-0  p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#2196f3] text-lg text-white font-bold px-10 btn rounded-full hover:bg-transparent hover:text-[#2196f3]"
              : "bg-white text-lg px-10 btn rounded-full border-[#2196f3] hover:border-[#2196f3] hover:bg-transparent hover:text-[#2196f3]"
          }
        >
          All Services
        </NavLink>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.category}`}
            className={({ isActive }) =>
              isActive
                ? "bg-[#2196f3] text-lg text-white font-bold px-10 btn rounded-full hover:bg-transparent hover:text-[#2196f3]"
                : "bg-white text-lg px-10 btn rounded-full border-[#2196f3] hover:border-[#2196f3] hover:bg-transparent hover:text-[#2196f3]"
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavbar;
