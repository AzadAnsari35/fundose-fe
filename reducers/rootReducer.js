import { combineReducers } from "redux";
import quizReducer from "./quiz.red";
import loaderReducer from "./common.red";
import authReducer from "./auth.red";

const reducers = {
  quiz: quizReducer,
  common: loaderReducer,
  auth: authReducer,
};

export default combineReducers(reducers);
