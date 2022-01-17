import * as types from "./types";

const allQuestion = [
  {
    question:
      "We can update the state in React.js by calling to setState() method. These calls are:",
    question_id: 10,
    level: 12,
    subject: "subject",
    subject_id: "hello",
    options: [
      {
        choice: "Synchronous in nature.",
        id: 1,
      },
      {
        choice: "Asynchronous in nature.",
        id: 2,
      },
      {
        choice: "Are asynchronous but can be made synchronous when required.",
        id: 3,
      },
      {
        choice: "None of the above.",
        id: 4,
      },
    ],
  },
  {
    question: "Some question",
    question_id: 10,
    level: 12,
    subject: "subject",
    subject_id: "hello",
    options: [
      {
        choice: "choice 1",
        id: 5,
      },
      {
        choice: "choice 1",
        id: 6,
      },
      {
        choice: "choice 1",
        id: 7,
      },
      {
        choice: "choice 1",
        id: 8,
      },
    ],
  },
  {
    question:
      "We can update the state in React.js by calling to setState() method. These calls are:",
    question_id: 10,
    level: 12,
    subject: "subject",
    subject_id: "hello",
    options: [
      {
        choice: "choice 1",
        id: 9,
      },
      {
        choice: "choice 1",
        id: 10,
      },
      {
        choice: "choice 1",
        id: 11,
      },
      {
        choice: "choice 1",
        id: 12,
      },
    ],
  },
];

export const fetchQuestion = (num) => (dispatch) =>
  dispatch({
    type: types.FETCH_QUESTION,
    payload: allQuestion[num],
  });

export const incrementQuestion = () => (dispatch) =>
  dispatch({
    type: types.INCREMENT_QUESTION,
  });
