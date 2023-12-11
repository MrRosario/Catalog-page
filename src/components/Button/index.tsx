import React from "react";
import styles from "./Button.module.css";

type props = {
  label: string;
  handleClick: () => void;
};

const Button = ({ label, handleClick }: props) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
