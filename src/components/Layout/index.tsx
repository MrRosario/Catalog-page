import React from "react";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import styles from "./Layout.module.css";

type props = {
  children: React.ReactNode;
};

export default function Layout({ children }: props) {
  return (
    <div className={styles.layout}>
      <Header />
      <section className={styles.content}>{children}</section>
      <Newsletter />
      <Footer />
    </div>
  );
}
