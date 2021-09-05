const initState = {
  data: [],
  isLoading: true,
  hasError: false,
};

const genreReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GENRES":
      return { ...state, data: action.payload };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false };
    case "FETCH_ERROR":
      return { ...state, hasError: true };
    default:
      return state;
  }
};

export default genreReducer;
