import {ADD_ITEM, REMOVE_ITEM, GET_ITEM} from './ActionTypes';

const initialState = {
  product: [],
  cartData: [],
};

export const ProductReducers = (state = initialState, action) => {
  // console.log('add to cart action payload check ::::::', action.payload);
  switch (action.type) {
    case GET_ITEM:
      return {...state, product: action.payload};
    case ADD_ITEM:
      const isExist = state.cartData.findIndex(
        item => item.id === action?.payload.id,
      );
      if (isExist === -1) {
        return {
          ...state,
          cartData: [...state.cartData, {...action.payload, qty: 1}],
        };
      } else {
        const cartDataTemp = state.cartData;
        cartDataTemp[isExist].qty = cartDataTemp[isExist].qty + 1;
        return {
          ...state,
          cartData: cartDataTemp,
        };
      }

    case REMOVE_ITEM:
      const isExistDe = state.cartData.findIndex(
        item => item.id === action?.payload.id,
      );

      const cartdata = state.cartData;
      if (cartdata[isExistDe].qty > 1) {
        cartdata[isExistDe].qty = cartdata[isExistDe].qty - 1;
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

    default:
      return state;
  }
};

export default ProductReducers;
