import * as types from "./types";
import api from "@/api/index";
import { toast } from "react-toastify";

export const startQuiz = (subjectId) => async (dispatch) => {
  try {
    dispatch({
      type: types.START_LOADER,
    });
    const response = await api.post("/quiz/start/", {
      subject_id: subjectId,
    });
    dispatch(fetchQuestion(response));
  } catch (error) {
    console.log(JSON.stringify(error.response));
    if (error?.response?.data?.detail === "NO_SAME_GAME_TWICE_SAME_DAY") {
      toast.error("Only one attempt per day. Please try again tomorrow.");
    } else {
      toast.error("Something went wrong");
    }
  } finally {
    dispatch({
      type: types.STOP_LOADER,
    });
  }
};

export const fetchQuestion = (response) => async (dispatch) => {
  dispatch({
    type: types.FETCH_QUESTION,
    payload: response,
  });
};

export const incrementLevel = () => async (dispatch) => {
  dispatch({
    type: types.INCREMENT_LEVEL,
  });
};

export const resetGame = () => async (dispatch) => {
  dispatch({
    type: types.RESET_GAME,
  });
};
