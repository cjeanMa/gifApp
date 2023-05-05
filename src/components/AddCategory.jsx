import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ addCategory }) => {
  const [inputCat, setInputCat] = useState("");

  const onInputChange = (e) => {
    setInputCat(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInputCat("");
    if (inputCat.trim().length <= 1) return;
    addCategory(inputCat);
  };

  return (
    <form onSubmit={onSubmit} name="formCategory">
      <input
        type="text"
        placeholder="Buscar"
        value={inputCat}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.protoTypes = {
  addCategory: PropTypes.func.isRequired,
};
