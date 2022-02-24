import * as types from "./types";

// export const startLoader = () => (dispatch) => {
//   console.log("start loader");
//   dispatch({
//     type: types.START_LOADER,
//   });
// };

// Load User
export const startLoader = () => (dispatch) => {
  console.log("start loader");
};

export const stopLoader = () => (dispatch) => {
  console.log("stop loader");

  dispatch({
    type: types.STOP_LOADER,
  });
};
