import CartIcon from "../Cart/PartIcon.js";

import classes from "./HeaderPartButton.module.css";

export default function HeaderPartButton(props) {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
