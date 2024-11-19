import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data); 
      })
  }, []);

  return (
    <div>
      <div className="flex flex-row gap-3">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className="btn"
            key={category.id}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavbar;
