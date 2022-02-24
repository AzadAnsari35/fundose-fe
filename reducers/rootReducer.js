import { combineReducers } from "redux";
import quizReducer from "./quiz.red";
import loaderReducer from "./common.red";

const reducers = {
  quiz: quizReducer,
  common: loaderReducer,
};

export default combineReducers(reducers);
