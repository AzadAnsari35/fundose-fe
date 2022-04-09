import * as types from "@/actions/types";

const initialState = {
  currentUser: {},
  isLoggedIn: false,
};

const quizReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      return { ...state, currentUser: payload, isLoggedIn: true };

    case types.LOGIN_FAILURE:
    case types.REGISTER_FAILURE:
      return { ...state, currentUser: {}, isLoggedIn: false };

    default:
      return state;
  }
};

export default quizReducer;
