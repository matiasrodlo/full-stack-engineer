import { ActionTypes } from "../contants/action-type";

const initialState = {
  products: [
    {
      id: 1,
      title: "Dispesh",
      category: "programmer",
    },
  ],
};

export const produtreduccer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
