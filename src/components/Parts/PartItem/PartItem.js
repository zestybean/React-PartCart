import classes from "./PartItem.module.css";

export default function PartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.part}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
}
