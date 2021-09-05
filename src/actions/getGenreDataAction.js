export const getGenreDataAction = (payload) => {
  return {
    type: "FETCH_GENRES",
    payload: payload,
  };
};

export const getGenreDataSuccess = () => {
  return {
    type: "FETCH_SUCCESS",
  };
};

export const getGenrexDataFailure = () => {
  return {
    type: "FETCH_ERROR",
  };
};
