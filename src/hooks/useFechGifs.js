import { useEffect, useState } from "react";
import getGifs from "../clients/getGifs";

const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const gettingGifs = async (category) => {
    const gifsApi = await getGifs(category);
    setGifs(gifsApi);
    setIsLoading(false);
  };

  useEffect(() => {
    gettingGifs(category);
  }, []);

  return {
    gifs,
    isLoading,
  };
};

export default useFetchGifs;
