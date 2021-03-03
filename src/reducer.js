export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic to adding to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // logic to remove from basket
      return {
        ...state,
        basket: state.basket.filter((i) => i.id !== action.item),
      };

    default:
      return state;
  }
};

/*
 */
