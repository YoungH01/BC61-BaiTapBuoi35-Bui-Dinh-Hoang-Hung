import { combineReducers } from "redux";
import watchMovieReducer from "./watchMovieReducer";
const rootReducer=combineReducers({
    watchMovieReducer:watchMovieReducer
});
export default rootReducer;