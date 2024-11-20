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
      <h1 className="text-center text-4xl font-bold mb-14">Our Services</h1>
    </div>
     <div className="flex space-x-4 p-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-[#9538e2] text-white font-bold px-10 btn rounded-full"
            : "bg-white px-10 btn rounded-full"
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
              ? "bg-[#9538e2] text-white font-bold px-10 btn rounded-full"
              : "bg-white px-10 btn rounded-full"
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
