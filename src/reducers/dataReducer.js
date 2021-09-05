const initState = {
  data: [],
  isLoading: true,
  hasError: false,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_FULL_DATA":
      return { ...state, data: action.payload };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false };
    case "FETCH_ERROR":
      return { ...state, hasError: true };
    default:
      return state;
  }
};

export default dataReducer;
