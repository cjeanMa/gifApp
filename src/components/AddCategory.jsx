import React, { useState } from "react";

const AddCategory = (props) => {
  const { addCategory } = props;
  const [inputCat, setInputCat] = useState("");

  const onInputChange = (e) => {
    setInputCat(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addCategory(inputCat);
    setInputCat("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar"
        value={inputCat}
        onChange={onInputChange}
      />
    </form>
  );
};



export default AddCategory;
