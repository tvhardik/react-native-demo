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
    // case INCREASE_QUANTITY:
    //   return {
    //     ...state,
    //     addtocart: state.addtocart.map(product => {
    //       if (product.id === action.payload) {
    //         return {
    //           ...product,
    //           quantity: product.quantity + 1,
    //         };
    //       }
    //       return product;
    //     }),
    //   };

    // case DECREASE_QUANTITY:
    //   return {
    //     ...state,
    //     addtocart: state.addtocart.map(product => {
    //       if (product.id === action.payload && product.quantity > 1) {
    //         return {
    //           ...product,
    //           quantity: product.quantity - 1,
    //         };
    //       }
    //       return product;
    //     }),
    //   };

    default:
      return state;
  }
};

export default ProductReducers;
