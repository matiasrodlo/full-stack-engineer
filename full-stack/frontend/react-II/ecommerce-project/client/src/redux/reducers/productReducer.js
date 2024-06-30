import { ActionTypes } from "../contants/action-type";

const initialState = {
  products: [],
};

export const produtreduccer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
