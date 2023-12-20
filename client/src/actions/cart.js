import {
  SET_CART,
  SET_SELECT_ITEM
} from "./types";

export const addCart = (service) => async dispatch => {
  let data = JSON.parse(localStorage.getItem("cart"));
  let flag = data.filter(item => item.title === service.title);

  if(flag.length > 0) {
    window.alert("You already selected this service.");
    return;
  }
  data.push(service);
  localStorage.setItem("cart", JSON.stringify(data));
  dispatch(setCart());
};

export const deleteItem = (i) => async dispatch => {
  let data = JSON.parse(localStorage.getItem("cart"));
  data.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  dispatch(setCart());
};

export const setCart = () => async dispatch => {
  let data = localStorage.getItem("cart");

  dispatch({
    type: SET_CART,
    payload: JSON.parse(data)
  });
};

export const selectItem = (item) => async dispatch => {
  dispatch({
    type: SET_SELECT_ITEM,
    payload: item
  });
};
