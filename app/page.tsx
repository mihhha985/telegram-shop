"use client";

import { useMemo, useState } from "react";
import { FiSearch, FiSliders } from "react-icons/fi";
import SearchItem from "@/component/searchItem/SearchItem";
import TopMenu from "@/component/topMenu/TopMenu";
import { products } from "@/data/products";
import styles from "./page.module.scss";

const categories = ["All", "Subscription", "Adventure", "Indie collection", "Creator toolkit", "Classics"];

export default function Home() {
	const [query, setQuery] = useState("");
	const [category, setCategory] = useState("All");

	const filteredProducts = useMemo(() => {
		const normalized = query.trim().toLowerCase();
		return products.filter((product) => {
			const matchesCategory = category === "All" || product.category === category;
			const matchesQuery = !normalized || [product.title, product.category, product.platform, product.shortDescription].some((value) => value.toLowerCase().includes(normalized));
			return matchesCategory && matchesQuery;
		});
	}, [category, query]);

	return (
		<div className="layout">
			<TopMenu />
			<main className={styles.main}>

				<section className={styles.catalog}>
					<div className={styles.catalogHeader}>
						<div><h2>Products</h2></div>
						<span>{filteredProducts.length.toString().padStart(2, "0")} products</span>
					</div>

					<div className={styles.tools}>
						<label className={styles.search}>
							<FiSearch aria-hidden="true" />
							<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" />
						</label>
						<div className={styles.categories}>
							<FiSliders aria-hidden="true" />
							{categories.map((item) => <button type="button" key={item} className={category === item ? styles.active : ""} onClick={() => setCategory(item)}>{item}</button>)}
						</div>
					</div>

					{filteredProducts.length > 0 ? (
						<div className={styles.grid}>{filteredProducts.map((product) => <SearchItem key={product.id} product={product} />)}</div>
					) : (
						<div className={styles.empty}><strong>Nothing found</strong><span>Try a different title or category.</span></div>
					)}
				</section>
			</main>
		</div>
	);
}
