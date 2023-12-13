"use client";

import React from "react";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import styles from "@/styles/Home.module.css";
import { IProduct } from "@/types/global";
import { useFetch } from "@/hook/useFetch";

const LIMIT = 12;

export default function Home() {
  const {
    data: productList,
    error,
    loading,
  } = useFetch(`https://fakestoreapi.com/products?limit=${LIMIT}`);

  const hasProducts = productList && productList.length > 0;

  return (
    <section className={styles.homePage}>
      <Banner />
      <section className={styles.homeContent}>
        <div className={styles.filtersWrapper}>
          <h2>Filters</h2>
        </div>
        <div className={styles.productsWrapper}>
          {error && <h2>Erro ao carregar os produtos</h2>}
          {loading && <h2>Carregando...</h2>}
          {hasProducts &&
            productList.map((product: IProduct) => {
              const { id, price, title, image, rating, description } = product;
              return (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  image={image}
                  rating={rating}
                  description={description}
                />
              );
            })}
        </div>
      </section>
    </section>
  );
}
