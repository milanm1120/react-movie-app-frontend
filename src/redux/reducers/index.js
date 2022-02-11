import movies from "./movieReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    movies
})

export default rootReducer;