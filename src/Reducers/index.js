import addProject from "./projects";
import changeLoader from "./loader";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ addProject, changeLoader });

export default rootReducer;
