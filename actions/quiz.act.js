import * as types from "./types";
import api from "@/api/index";
import { toast } from "react-toastify";

export const startQuiz = (subjectId, router) => async (dispatch) => {
  try {
    dispatch({
      type: types.START_LOADER,
    });
    const response = await api.post("/quiz/start/", {
      subject_id: subjectId,
    });
    console.log("response", response);
    dispatch(fetchQuestion(response));
    router.push("/");
  } catch (error) {
    console.log("error", error);
    if (error?.response?.data?.detail === "no_same_game_twice_same_day") {
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
