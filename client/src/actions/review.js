import api from "../utils/api";
import { setAlert } from "./alert";
import {
  CREATE_REVIEW,
  REVIEW_ERROR,
  GET_REVIEWS,
  GET_REVIEW_INIT
} from "./types";

export const getReviewInit = (num) => async dispatch => {

  const res = await api.get("/review/init/"+num);
  dispatch({
    type: GET_REVIEW_INIT,
    payload: res.data
  });
};

export const createReview = (data) => async dispatch => {
  try {
    const res = await api.post("/review", data);

    dispatch({
      type: CREATE_REVIEW,
      payload: res.data
    });

    dispatch(getReviewInit(data.num));
    dispatch(setAlert("Review Created", "success"));
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getReviews = (num) => async dispatch => {
  try {
    const res = await api.get("/review/"+num);

    dispatch({
      type: GET_REVIEWS,
      payload: res.data
    });

    dispatch(setAlert("Review Created", "success"));
  } catch (err) {
    dispatch({
      type: REVIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
