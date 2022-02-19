import { useContext } from "react";

import classes from "./PartItem.module.css";
import PartItemForm from "./PartItemForm";
import CartContext from "../../../store/cart-context";

export default function PartItem(props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.part}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <PartItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
