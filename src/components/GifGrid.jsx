import React, { useEffect, useState } from "react";
import getGifs from "../clients/getGifs";
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFechGifs";

const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>..Cargando</h2>}
      <div className="card-grid">
        {gifs.map((el) => (
          <GifItem key={el.id} {...el} />
        ))}
      </div>
      ;
    </>
  );
};

export default GifGrid;
