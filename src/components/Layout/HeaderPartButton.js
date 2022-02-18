import { useContext } from "react";

import CartIcon from "../Cart/PartIcon.js";
import CartContext from "../../store/cart-context.js";
import classes from "./HeaderPartButton.module.css";

export default function HeaderPartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
