import API_KEY from "./apikey";

const endpoints = () => {
  return {
    movieDataPath: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
    imagePath:
      "https://image.tmdb.org/t/p/w500/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
    genrePath: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
  };
};

export default endpoints;
