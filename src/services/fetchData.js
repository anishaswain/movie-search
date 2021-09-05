import axios from "axios";
import endpoints from "../config/endpoints";
import API_KEY from "../config/apikey";

const { movieDataPath } = endpoints;

const fetchFullData = () => {
  return axios
    .get(`${movieDataPath}?api_key=${API_KEY}`)
    .then((res) => res.data.results);
};

export default fetchFullData;
