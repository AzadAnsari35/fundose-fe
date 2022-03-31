import * as types from "./types";

// export const startLoader = () => (dispatch) => {
//   console.log("start loader");
//   dispatch({
//     type: types.START_LOADER,
//   });
// };

// Load User
export const startLoader = () => (dispatch) => {
  dispatch({
    type: types.START_LOADER,
  });
};

export const stopLoader = () => (dispatch) => {
  console.log("stop loader");

  dispatch({
    type: types.STOP_LOADER,
  });
};

export const showModal = (modalType) => (dispatch) => {
  return dispatch({
    type: types.SHOW_MODAL,
    payload: modalType,
  });
};

export const hideModal = () => (dispatch) => {
  return dispatch({
    type: types.HIDE_MODAL,
  });
};
