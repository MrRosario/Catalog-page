import React from "react";
import { ICart } from "@/types/global";
import { useCart } from "@/context/cartContext";
import styles from "./CartCounter.module.css";

type props = {
  item: ICart;
};

const CartCounter = ({ item }: props) => {
  const { removeFromCart, addToCart } = useCart();

  const handleDecrement = () => {
    removeFromCart(item.id);
  };
  const handleIncrement = () => {
    addToCart(item);
  };

  return (
    <div className={styles.cartCounter}>
      <button onClick={handleDecrement}>-</button>
      <span>{item.quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default CartCounter;
