import {ADD_ITEM, REMOVE_ITEM} from './ActionTypes';
export const Additemtocart = data => ({
  type: ADD_ITEM,
  payload: data,
});
export const Removeitemfromcart = Index => ({
  type: REMOVE_ITEM,
  payload: Index,
});
