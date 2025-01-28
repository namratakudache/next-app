import React from "react";
import AddToCart from "../AddToCart";
import styles from "./productCard.module.css";

const productCard = () => {
  return (
    <div className={styles.css}>
      <AddToCart />
    </div>
  );
};

export default productCard;
