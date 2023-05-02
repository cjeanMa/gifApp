const getGifs = async (category) => {
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=A4yfZRg3GK8xtNsYRfBPmHnNEtNUO4BP&q=${category}&limit=${limit}`;
  const response = await fetch(url);
  const { data } = await response.json();
  console.log(data);

  const gifs = data.map( img =>({
    id: img.id, 
    title: img.title, 
    url: img.images.downsized_medium.url
  }))

  return gifs;
};

export default getGifs;
