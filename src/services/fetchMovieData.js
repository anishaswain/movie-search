import axios from "axios";
import endpoints from "../config/endpoints";
import API_KEY from "../config/apikey";

const { basePath } = endpoints;

const fetchMovieData = async (id) => {
  const creditsData = await fetchMovieCredit(id);
  const movieData = await axios
    .get(`${basePath}${id}?api_key=${API_KEY}`)
    .then((res) => res.data);
  return { ...movieData, ...creditsData };
};

const fetchMovieCredit = (id) => {
  return axios
    .get(`${basePath}${id}/credits?api_key=${API_KEY}`)
    .then((res) => res.data);
};

export default fetchMovieData;
