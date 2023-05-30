import axios from 'axios';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  GET_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from './ActionTypes';

export const Getitem = () => {
  return async dispatch => {
    const res = await axios.get('https://fakestoreapi.com/products');
    if (res.data) {
      dispatch({
        type: GET_ITEM,
        payload: res.data,
      });
    } else {
      console.log('Unable to fetch', res.data);
    }
  };
};
export const Additemtocart = data => dispatch =>
  dispatch({
    type: ADD_ITEM,
    payload: data,
  });
export const Removeitemfromcart = data => dispatch =>
  dispatch({
    type: REMOVE_ITEM,
    payload: data,
  });
export const IncreaseQuantity = itemId => dispatch =>
  dispatch({
    type: INCREASE_QUANTITY,
    payload: itemId,
  });
export const DecreaseQuantity = itemId => dispatch =>
  dispatch({
    type: DECREASE_QUANTITY,
    payload: itemId,
  });
