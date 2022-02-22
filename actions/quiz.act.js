import * as types from "./types";
import api from "@/api/index";
import { toast } from "react-toastify";

export const startQuiz = () => async (dispatch) => {
  try {
    const response = await api.post("/quiz/start/", {
      subject_id: 1,
    });
    console.log("response", response);
    dispatch({
      type: types.FETCH_QUESTION,
      payload: response,
    });
  } catch (error) {
    toast.error("Wow so easy!");
  }
};

export const incrementQuestion = () => (dispatch) =>
  dispatch({
    type: types.INCREMENT_QUESTION,
  });
