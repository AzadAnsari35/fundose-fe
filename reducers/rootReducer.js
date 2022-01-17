import { combineReducers } from "redux";
import quizReducer from "./quiz.red";

const reducers = {
  quiz: quizReducer,
};

export default combineReducers(reducers);
