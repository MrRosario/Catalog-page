import React from "react";
import { routePaths } from "@/utils/constants";
import { useRouter } from "next/router";
import Link from "next/link";
import ShoppingCart from "@/components/ShoppingCart";
import styles from "./Header.module.css";
import Cart from "../Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const router = useRouter();
  const pathName = router.pathname;

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInnerWrapper}>
        <div>Logo</div>
        <nav>
          <ul>
            {routePaths.map((routePath, index) => (
              <li
                className={`${styles.link} ${
                  pathName === routePath.path ? styles.activedLink : ""
                }`}
                key={index}
              >
                <Link href={routePath.path}>{routePath.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ShoppingCart toggleCart={handleCart} />
        {isCartOpen && <Cart />}
      </div>
    </header>
  );
};

export default Header;
