import classes from "./AvailableParts.module.css";
import Card from "../UI/Card";
import PartItem from "./PartItem/PartItem";

const DUMMY_DATA = [
  { id: "m1", name: "ROOF", description: "Truck roof.", price: 214.22 },
  { id: "m2", name: "SKIRT", description: "Truck skirt.", price: 183.69 },
  { id: "m3", name: "FAIRING", description: "Truck fairing.", price: 48.81 },
  { id: "m4", name: "BUMPER", description: "Truck bumper.", price: 425.67 },
];

export default function AvailableParts() {
  const partsList = DUMMY_DATA.map((part) => {
    return (
      <PartItem
        id={part.id}
        key={part.id}
        name={part.name}
        description={part.description}
        price={part.price}
      />
    );
  });

  return (
    <section className={classes.parts}>
      <Card>
        <ul>{partsList}</ul>
      </Card>
    </section>
  );
}
