import { combineReducers } from "redux";
import movieList from "./movieListReducer";
export default combineReducers({
    movieList: movieList
});


