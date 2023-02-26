import CartIcon from '../Cart/CartIcon';
import CardContex from '../../store/CardContext';
import { useContext } from 'react';

import classes from '../Layout/HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const carCtx = useContext(CardContex);

  const numberOfCartItems = carCtx.items.reduce((index, item) => {
    return index + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
