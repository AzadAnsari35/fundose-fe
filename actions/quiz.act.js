import * as types from "./types";

const allQuestion = [
  {
    question:
      "Broker Limited charge commission on every sales of Maal Limited. Broker limited raise invoice after on 15th of each month. How should the broker limited account for revenue from 16th March 2021 to 31st March 2021. Considering the 31st March is cut off date",
    question_id: 10,
    level: 12,
    subject: "subject",
    subject_id: "hello",
    options: [
      {
        choice:
          "Recognise the amount as advance from client till the time company complete the services",
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
