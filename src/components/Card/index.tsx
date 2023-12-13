import React from "react";
import styles from "./Card.module.css";
import { Rating } from "react-simple-star-rating";
import { IProduct } from "@/types/global";
import Button from "../Button";
import { useCart } from "@/context/cartContext";
import { formatCurrency } from "@/utils/helpers";

const Card = ({
  title,
  price,
  image,
  oldPrice,
  rating,
  id,
  description,
}: IProduct) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, quantity: 1 });
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <div className={styles.cardDescription}>
          <span>{description}</span>
        </div>
        <Button label="Add to cart" handleClick={handleAddToCart} />
        <img loading="lazy" width="100%" src={image} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <Rating
          initialValue={rating.rate || 0}
          readonly={true}
          transition={true}
          allowFraction={true}
          size={16}
          fillColor="#343839"
        />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>{formatCurrency(price)}</span>
          {oldPrice && (
            <span className={styles.oldPrice}>{formatCurrency(oldPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
