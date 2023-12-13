import React from "react";
import { routePaths } from "@/utils/constants";
import styles from "@/components/Header/Header.module.css";
import Link from "next/link";

type porps = {
  pathName: string;
};

const MobileNavBar = ({ pathName }: porps) => (
  <nav className={styles.mobileNavBar}>
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
);

export default MobileNavBar;
