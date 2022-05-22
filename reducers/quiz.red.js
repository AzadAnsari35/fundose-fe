import * as types from "@/actions/types";

const initialState = {
  question: {},
  level: 1,
  isGamePlaying: false,
};

const quizReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_QUESTION:
      return {
        ...state,
        question: payload,
        isGamePlaying: true,
      };
    case types.INCREMENT_LEVEL:
      return {
        ...state,
        level: state.level + 1,
      };
    case types.RESET_GAME:
      return {
        ...state,
        level: 1,
        isGamePlaying: false,
      };

    default:
      return state;
  }
};

export default quizReducer;
