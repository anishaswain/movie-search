export const getMovieDataAction = (payload) => {
  return {
    type: "FETCH_MOVIE_DATA",
    payload: payload,
  };
};

export const getMovieDataSuccess = () => {
  return {
    type: "FETCH_SUCCESS",
  };
};

export const getMovieDataFailure = () => {
  return {
    type: "FETCH_ERROR",
  };
};
