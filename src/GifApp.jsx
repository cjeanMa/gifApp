import AddCategory from "./components/AddCategory";
import React, { useState } from "react";
import GifGrid from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["Mountains"]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div>GifApp</div>

      <AddCategory addCategory={addCategory} />

      {
        categories.map((cat) => (
          <GifGrid 
            key={cat} 
            category={cat} 
            />
        ))
      }
    </>
  );
};

export default GifApp;
