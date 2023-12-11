import React from "react";
import styles from "./Card.module.css";
import Tag from "@/components/Tag";
import { Rating } from "react-simple-star-rating";
import { IRating } from "@/types/global";
import Button from "../Button";
import { useCart } from "@/context/cartContext";
import { formatCurrency } from "@/utils/helpers";

type CardProps = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: IRating;
};

const Card = ({ title, price, image, oldPrice, rating, id }: CardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, quantity: 1 });
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <Button label="Add to cart" handleClick={handleAddToCart} />
        <div className={styles.tagsWrapper}>
          <Tag label="New" themeColor="white" />
          <Tag label="-50%" themeColor="green" />
        </div>
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
