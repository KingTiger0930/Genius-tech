import { SET_CART, SET_SELECT_ITEM } from "../actions/types";

const initialState = {
	carts: [],
	selectedItem: null
};

function cartReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case SET_CART:
        return {
          ...state,
          carts: payload
        };
      case SET_SELECT_ITEM:
        return {
          ...state,
          selectedItem: payload
        };
      default:
        return state;
    }
}

export default cartReducer;
