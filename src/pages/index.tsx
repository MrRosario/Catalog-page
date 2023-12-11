import React from "react";
import useSWR from "swr";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { fetcher } from "@/utils/helpers";
import styles from "@/styles/Home.module.css";
import { IProduct } from "@/types/global";

const LIMIT = 12;
export default function Home() {
  const {
    data: productList,
    error,
    isLoading,
  } = useSWR(`https://fakestoreapi.com/products?limit=${LIMIT}`, fetcher);

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
          {isLoading && <h2>Carregando...</h2>}
          {hasProducts &&
            productList.map((product: IProduct) => {
              const { id, price, title, image, rating } = product;
              return (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  image={image}
                  rating={rating}
                />
              );
            })}
        </div>
      </section>
    </section>
  );
}
