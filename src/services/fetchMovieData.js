import axios from "axios";
import endpoints from "../config/endpoints";
import API_KEY from "../config/apikey";

const { basePath } = endpoints;

const fetchMovieData = (id) => {
  console.log(fetchMovieCredit(id));
  return axios
    .get(`${basePath}${id}?api_key=${API_KEY}`)
    .then((res) => res.data);
};

const fetchMovieCredit = (id) => {
  return axios
    .get(`${basePath}${id}credits?api_key=${API_KEY}`)
    .then((res) => res.data);
};

export default fetchMovieData;
