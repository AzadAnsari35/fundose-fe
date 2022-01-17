import * as types from "@/actions/types";

const initialState = {
  question: {},
  questionNumber: 1,
};

const quizReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_QUESTION:
      return { ...state, question: payload };

    case types.INCREMENT_QUESTION:
      return { ...state, questionNumber: state.questionNumber + 1 };

    default:
      return state;
  }
};

export default quizReducer;
