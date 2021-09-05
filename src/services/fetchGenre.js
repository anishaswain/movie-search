import axios from "axios";
import endpoints from "../config/endpoints";
import API_KEY from "../config/apikey";

const { genrePath } = endpoints;

const fetchGenreData = () => {
  return axios
    .get(`${genrePath}?api_key=${API_KEY}`)
    .then((res) => res.data.genres);
};

export default fetchGenreData;
