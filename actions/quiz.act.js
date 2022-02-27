import * as types from "./types";
import api from "@/api/index";
import { toast } from "react-toastify";
import { startLoader, stopLoader } from "./common.act";

export const startQuiz = () => async (dispatch) => {
  try {
    dispatch({
      type: types.START_LOADER,
    });
    const response = await api.post("/quiz/start/", {
      subject_id: 1,
    });
    console.log("response", response);
    dispatch({
      type: types.FETCH_QUESTION,
      payload: response,
    });
  } catch (error) {
    console.log(error);
    toast.error("error");
  } finally {
    dispatch({
      type: types.STOP_LOADER,
    });
  }
};

export const incrementQuestion = () => (dispatch) =>
  dispatch({
    type: types.INCREMENT_QUESTION,
  });
