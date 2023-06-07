import axios from 'axios';
import {ADD_ITEM, REMOVE_ITEM, GET_ITEM, LOGIN, LOGOUT} from './ActionTypes';

export const Getitem = () => {
  return async dispatch => {
    const res = await axios.get('https://fakestoreapi.com/products');
    if (res.data) {
      // console.log(res, 'res');
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

export const Login = data => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const Logout = data => {
  return {
    type: LOGOUT,
    payload: data,
  };
};
