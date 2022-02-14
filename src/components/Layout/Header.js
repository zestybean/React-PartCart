import React from "react";

import partImage from "../../assets/parts.jpg";
import classes from "./Header.module.css";
import HeaderPartButton from "./HeaderPartButton";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>Paintline Carts/Parts</h1>
        <HeaderPartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={partImage} alt="Parts and stuff" />
      </div>
    </>
  );
}
