import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart() {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => {
      <li>{item.name}</li>;
    }
  );

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>34.38</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
