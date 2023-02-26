import classes from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart = (props) => {
  const cart = [
    {
      key: 'c1',
      name: 'Sarma',
      amount: '2',
      price: '10.49',
    },
    {
      id: 'c2',
      name: 'Eggs',
      amount: '2',
      price: '5.00',
    },
  ];
  return (
    <Modal onClose={props.onClose}>
      <div>
        <ul className={classes['cart-items']}>
          {cart.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>20.98</span>
      </div>

      <div className={classes.action}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
