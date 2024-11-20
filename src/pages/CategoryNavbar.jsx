// import React from 'react';
// //import { NavLink, useLoaderData } from 'react-router-dom';

// const CategoryNavbar = () => {
//  //const categories = useLoaderData(); // Load the categories data

//   // return (
//   //   // <div className="flex space-x-4 p-4">
//   //   //   <NavLink to='/'>all Services</NavLink>
//   //   //   {categories.map((category) => (
//   //   //     <NavLink to={`/category/${category.category}`}  key={category.id}
//   //   //     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//   //   //      {category.category}
//   //   //     </NavLink>
//   //   //   ))}
//   //   // </div>
//   // );
// };

// export default CategoryNavbar;
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
    <div className="flex space-x-4 p-4">
      <NavLink
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        All Services
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/category/${category.category}`}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryNavbar;
