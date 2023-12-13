"use client";

import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import styles from "@/styles/Home.module.css";
import { IProduct } from "@/types/global";
import { useFetch } from "@/hook/useFetch";
import Filter from "@/components/Filter";

const LIMIT = 12;

export default function Home() {
  const [category, setCategory] = useState<string>("electronics");

  const {
    data: productList,
    error,
    loading,
  } = useFetch(
    `https://fakestoreapi.com/products/category/${category}?limit=${LIMIT}`
  );

  const {
    data: categoriesList,
    error: categoriesError,
    loading: categoriesLoading,
  } = useFetch(`https://fakestoreapi.com/products/categories`);

  const hasProducts = productList && productList.length > 0;
  const hasCategories = categoriesList && categoriesList.length > 0;

  return (
    <section className={styles.homePage}>
      <Banner />
      <section className={styles.homeContent}>
        <div className={styles.filtersWrapper}>
          {categoriesError && <h2>Erro ao carregar as categorias</h2>}
          {categoriesLoading && <h2>Carregando...</h2>}
          {hasCategories && (
            <Filter
              label="CATEGORIES"
              options={categoriesList}
              setCategory={setCategory}
              category={category}
            />
          )}
        </div>
        <div className={styles.productsWrapper}>
          {error && <h2>Erro ao carregar os produtos</h2>}
          {loading && <h2>Carregando...</h2>}
          {hasProducts &&
            !loading &&
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
