import React from "react";
import { useCart } from "@/context/cartContext";
import styles from "./ShoppingCart.module.css";

type props = {
  toggleCart: () => void;
};

const ShoppingCart = ({ toggleCart }: props) => {
  const { totalItems } = useCart();
  const hasItems = totalItems > 0;

  return (
    <div className={styles.shoppingCartWrapper} onClick={toggleCart}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
          stroke="#141718"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6115 3H8.38848C6.43313 3 4.76436 4.41365 4.44291 6.3424L2.77624 16.3424C2.36988 18.7805 4.25006 21 6.72182 21H17.2781C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.557 6.3424C19.2356 4.41365 17.5668 3 15.6115 3Z"
          stroke="#141718"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      {hasItems && (
        <div className={styles.cartCount}>
          <span>{totalItems}</span>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;