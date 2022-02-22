import * as types from "./types";

export const startLoader = () => (dispatch) => {
  dispatch({
    type: types.START_LOADER,
  });
};

export const stopLoader = () => (dispatch) => {
  dispatch({
    type: types.STOP_LOADER,
  });
};
