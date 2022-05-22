import * as types from "./types";
import api from "@/api/index";
import { toast } from "react-toastify";

export const startQuiz = (router) => async (dispatch) => {
  try {
    dispatch({
      type: types.START_LOADER,
    });
    const response = await api.post("/quiz/start/", {
      subject_id: 2,
    });
    dispatch(fetchQuestion(response));
  } catch (error) {
    toast.error("error");
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
