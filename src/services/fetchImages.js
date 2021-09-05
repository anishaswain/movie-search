import endpoints from "../config/endpoints";

const { imagePath } = endpoints;

const fetchImages = (size, path) => {
  return `${imagePath}${size}${path}`;
};

export default fetchImages;
