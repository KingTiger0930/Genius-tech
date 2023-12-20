import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import review from "./review";
import cart from "./cart";
import question from "./question";

export default combineReducers({
  alert,
  auth,
  review,
  cart,
  question
});
