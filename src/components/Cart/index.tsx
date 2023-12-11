import React from "react";
import { useCart } from "@/context/cartContext";
import styles from "./Cart.module.css";
import CartCounter from "../CartCounter";
import { formatCurrency } from "@/utils/helpers";
import Button from "../Button";

const Cart = () => {
  const { cart, totalPrice, subTotalPrice } = useCart();
  const hasItems = cart.cartItems.length > 0;

  return (
    <section className={styles.cartWrapper}>
      {hasItems ? (
        <>
          <h3>Your bag</h3>
          <div className={styles.cartContent}>
            {cart.cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} />
                <div className={styles.cartItemContent}>
                  <h4>{item.title}</h4>
                  <div className={styles.colorWrapper}>
                    <span>Color:</span>
                  </div>
                  <CartCounter item={item} />
                </div>
                <span className={styles.cartPrice}>
                  {formatCurrency(item.price)}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.cartFooter}>
            <div className={styles.cartFooterContent}>
              <span className={styles.subtotalLabel}>Subtotal</span>
              <span className={styles.subtotal}>
                {formatCurrency(subTotalPrice)}
              </span>
            </div>
            <div className={styles.cartFooterContent}>
              <span className={styles.totalLabel}>Total</span>
              <span className={styles.total}>{formatCurrency(totalPrice)}</span>
            </div>
            <Button
              label="Go to checkout"
              handleClick={() => console.log("go to checkout")}
            />
          </div>
        </>
      ) : (
        <p className={styles.emptyCart}>Your cart is empty</p>
      )}
    </section>
  );
};
export default Cart;
