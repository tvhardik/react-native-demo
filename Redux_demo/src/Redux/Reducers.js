import {ADD_ITEM, REMOVE_ITEM, GET_ITEM} from './ActionTypes';
const initialState = {
  product: [],
  addtocart: [],
};
export const ProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return {...state, product: action.payload};
    case ADD_ITEM:
      return {...state, addtocart: [...state.addtocart, action.payload]};
    case REMOVE_ITEM:
      return {
        ...state,
        addtocart: state.addtocart.filter(
          products => products.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
export default ProductReducers;
