import {ADD_ITEM, REMOVE_ITEM, GET_ITEM, LOGIN, LOGOUT} from './ActionTypes';

const initialState = {
  isAuthenticated: false,
  product: [],
  cartData: [],
};

export const ProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM: //get api data
      return {...state, product: action.payload};
    case ADD_ITEM: //add item
      const isExistincreament = state.cartData.findIndex(
        item => item.id === action?.payload.id,
      );
      if (isExistincreament === -1) {
        return {
          ...state,
          cartData: [...state.cartData, {...action.payload, qty: 1}],
        };
      } else {
        const cartDataTemp = state.cartData;
        cartDataTemp[isExistincreament].qty =
          cartDataTemp[isExistincreament].qty + 1;
        return {
          ...state,
          cartData: cartDataTemp,
        };
      }

    case REMOVE_ITEM: //remove item
      const isExistdecreament = state.cartData.findIndex(
        item => item.id === action?.payload.id,
      );
      const cartdata = state.cartData;
      if (cartdata[isExistdecreament].qty > 1) {
        cartdata[isExistdecreament].qty = cartdata[isExistdecreament].qty - 1;
        return {
          ...state,
          cartData: cartdata,
        };
      } else {
        const tempCartData = cartdata.filter(
          item => item.id !== action?.payload.id,
        );
        return {
          ...state,
          cartData: tempCartData,
        };
      }

    case LOGIN: // login
      return {
        ...state,
        isAuthenticated: false,
        cartData: [],
      };

    case LOGOUT: // logout
      return {
        // ...state,
        // isAuthenticated: false,
        cartData: [],
        // initialState,
      };
    default:
      return state;
  }
};

export default ProductReducers;
