import React from "react";
import styles from "./Banner.module.css";
import BannerImg from "@/assets/images/banner.png";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <img src={BannerImg.src} alt="Banner" />
    </section>
  );
};

export default Banner;
