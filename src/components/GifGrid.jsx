import React, { useEffect, useState } from "react";
import getGifs from "../clients/getGifs";

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const gettingGifs = async (category) => {
    const gifsApi = await getGifs(category);
    setGifs(gifsApi);
  };

  useEffect(() => {
    gettingGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {gifs.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ol>
      ;
    </>
  );
};

export default GifGrid;
