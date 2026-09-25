"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TopMenu from "@/component/topMenu/TopMenu";
import SearchItem from "@/component/searchItem/SearchItem";
import { products } from "@/data/products";
import { getFavoriteIds } from "@/data/favorites";
import styles from "./page.module.css";

export default function FavoritesPage() {
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    const update = () => setIds(getFavoriteIds());
    update();
    window.addEventListener("arcadia:favorites-change", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("arcadia:favorites-change", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  const favorites = products.filter((product) => ids.includes(product.id));

  return (
    <div className="layout">
      <TopMenu />
      <main className={styles.main}>
        <h1>Favorites</h1>
        {favorites.length ? (
          <div className={styles.list}>
            {favorites.map((product) => <SearchItem key={product.id} product={product} />)}
          </div>
        ) : (
          <div className={styles.empty}>
            <strong>No favorites yet</strong>
            <p>Save products you like and find them here.</p>
            <Link href="/">Explore products</Link>
          </div>
        )}
      </main>
    </div>
  );
}
