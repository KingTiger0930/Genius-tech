import { GET_QUESTIONS } from "../actions/types";

const initialState = {
  questions: [],
  count: 0
};

function questionReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case GET_QUESTIONS:
        return {
          ...state,
          questions: payload
        };
      default:
        return state;
    }
}

export default questionReducer;
