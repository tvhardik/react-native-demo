import axios from 'axios';
import {ADD_ITEM, REMOVE_ITEM, GET_ITEM} from './ActionTypes';
export const Getitem = () => {
  try {
    return async dispatch => {
      const res = await axios.get('https://dummyjson.com/products/1');
      if (res.data) {
        dispatch({
          type: GET_ITEM,
          payload: res.data.results,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {}
};

export const Additemtocart = data => ({
  type: ADD_ITEM,
  payload: data,
});
export const Removeitemfromcart = Index => ({
  type: REMOVE_ITEM,
  payload: Index,
});
