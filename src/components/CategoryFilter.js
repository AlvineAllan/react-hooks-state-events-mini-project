import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => onSelectCategory("All")}
        key="allButton"
      >
        All
      </button>
      
      {categories
        .filter((category) => category !== "All") 
        .map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
    </div>
  );
}

export default CategoryFilter;
