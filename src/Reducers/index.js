import addProject from "./projects";
import changeLoader from "./loader";
import globalUser from "./globaluser";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ addProject, changeLoader, globalUser });

export default rootReducer;
