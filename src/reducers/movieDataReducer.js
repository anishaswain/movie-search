const initState = {
  data: [],
  isLoading: true,
  hasError: false,
};

const movieDataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_DATA":
      return { ...state, data: action.payload };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false };
    case "FETCH_ERROR":
      return { ...state, hasError: true };
    default:
      return state;
  }
};

export default movieDataReducer;
