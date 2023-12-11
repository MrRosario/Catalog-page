import React from "react";
import styles from "./Tags.module.css";

type CardProps = {
  label: string;
  themeColor?: "white" | "green";
};

const Tag = ({ themeColor = "white", label }: CardProps) => {
  return (
    <div
      className={`${styles.tag} ${
        themeColor === "green" ? styles.greenStyle : ""
      }`}
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default Tag;
