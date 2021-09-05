import axios from "axios";
import endpoints from "../config/endpoints";
import API_KEY from "../config/apikey";

const { movieDataPath, queryPath } = endpoints;

export const fetchFullData = () => {
  return axios
    .get(`${movieDataPath}?api_key=${API_KEY}`)
    .then((res) => res.data.results);
};

export const fetchQueryData = (query) => {
  return axios
    .get(`${queryPath}?api_key=${API_KEY}&query=${query}`)
    .then((res) => res.data.results);
};
