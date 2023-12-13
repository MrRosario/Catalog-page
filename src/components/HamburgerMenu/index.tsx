import React, { MouseEventHandler } from "react";
import styles from "./HamburgerMenu.module.css";

type Props = {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const HamburgerMenu = ({ isOpen, onClick }: Props) => {
  return (
    <div className={styles.hamburgerMenuWrapper}>
      <div onClick={onClick}>
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
