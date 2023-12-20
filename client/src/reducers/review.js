import { GET_REVIEWS, GET_REVIEW_INIT } from "../actions/types";

const initialState = {
  reviews: [],
  topreviews: [],
  customerreviews: [],
  review: null,
  ratingcount: [0,0,0,0,0],
  total: 0,
  count: 0
};

function reviewReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case GET_REVIEWS:
        return {
          ...state,
          reviews: payload
        };
      case GET_REVIEW_INIT:
        return {
          ...state,
          topreviews: payload.reviews,
          ratingcount: payload.ratingcount,
          total: payload.total,
          count: payload.count
        };
      default:
        return state;
    }
}

export default reviewReducer;
