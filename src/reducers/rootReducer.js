import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import genreReducer from "./genreReducer";
import movieDataReducer from "./movieDataReducer";

const rootReducer = combineReducers({
  fullData: dataReducer,
  genreData: genreReducer,
  movieData: movieDataReducer,
});

export default rootReducer;
