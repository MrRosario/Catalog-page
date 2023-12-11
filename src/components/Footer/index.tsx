import React from "react";
import { routePaths } from "@/utils/constants";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContent}>
        <div className={styles.footerTopContent}>
          <h3>Gift & Decoration Store</h3>
          <nav className={styles.footerNav}>
            <ul>
              {routePaths.map((route, index) => (
                <li key={index}>
                  <Link href={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.footerBottomContent}>
          <div className={styles.footerBottomContentLeft}>
            <p>Copyright © 2023 Gift & Decoration Store. All rights reserved</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div className={styles.footerBottomContentRight}>
            <YoutubeIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
      </section>
    </footer>
  );
};

const YoutubeIcon = () => (
  <a href="#">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" />
    </svg>
  </a>
);
const FacebookIcon = () => (
  <a href="#">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
        fillRule="evenodd"
      />
    </svg>
  </a>
);
const InstagramIcon = () => (
  <a href="#">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
    </svg>
  </a>
);

export default Footer;
