import AddCategory from "./components/AddCategory";
import React, { useState } from "react";
import GifGrid from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["Mountains", "Sunset"]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <div>GifApp</div>

      <AddCategory addCategory={addCategory} />

      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </>
  );
};

export default GifApp;
