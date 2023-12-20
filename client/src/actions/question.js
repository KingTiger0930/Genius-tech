import api from "../utils/api";
import {
  GET_QUESTIONS
} from "./types";

export const getQuestionInit = (num) => async dispatch => {
  const res = await api.get("/question/init/"+num);

  dispatch({
    type: GET_QUESTIONS,
    payload: res.data
  });
};

export const createQuestion = (data) => async dispatch => {
  try {
    await api.post("/question", data);

    dispatch(getQuestionInit(data.num));
  } catch (err) {
    console.log(err);
  }
};

export const addAnswer = (data) => async dispatch => {
  try {
    await api.post("/question/answer", data);

    dispatch(getQuestionInit(data.num));
  } catch (err) {
    console.log(err);
  }
};

export const addVote = (vote, question, num) => async dispatch => {
  console.log(question);
  try {
    await api.post("/question/vote", {vote, question});

    dispatch(getQuestionInit(num));
  } catch (err) {
    console.log(err);
  }
};