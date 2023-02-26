import { useReducer } from 'react';

import CardContex from './CardContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cardReducer = (state, action) => {
  const updatedItems = state.items.concat(action.item);
  const updatedTotalAmount =
    state.totalAmount + action.item.price * action.item.amount;
  if (action === 'ADD')
    return { items: updatedItems, totalAmount: updatedTotalAmount };
};

const CardProvider = (props) => {
  const [carState, displayCartAction] = useReducer(
    cardReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    displayCartAction({
      type: 'ADD',
      item: item,
    });
  };
  const removeItemToCartHandler = (id) => {
    displayCartAction({
      type: 'REMOVE',
      id: id,
    });
  };

  const cardContex = {
    items: carState.items,
    totalAmount: carState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CardContex.Provider value={cardContex}>
      {props.children}
    </CardContex.Provider>
  );
};

export default CardProvider;
