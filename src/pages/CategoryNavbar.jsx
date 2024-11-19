import React, { useEffect, useState } from "react";

const CategoryNavbar = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="flex flex-row gap-3">
        <button className="btn" onClick={() => onCategorySelect("All")}>
          All Services
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            className="btn"
            onClick={() => onCategorySelect(category.category)}
          >
            {category.category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavbar;
