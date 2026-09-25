"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";
import { Product } from "@/data/products";
import { getFavoriteIds, toggleFavorite } from "@/data/favorites";
import styles from "./SearchItem.module.css";

function SearchItem({ product }: { product: Product }) {
	const [favorite, setFavorite] = useState(false);
	useEffect(() => setFavorite(getFavoriteIds().includes(product.id)), [product.id]);

	return (
		<article className={styles.card}>
			<Link href={`/product/${product.id}`} className={styles.imageLink} aria-label={`View ${product.title}`}>
				<Image src={product.image} alt={`${product.title} product artwork`} fill sizes="76px" className={styles.image} />
				<div className={styles.imageShade} />
				{product.badge && <span className={styles.badge}>{product.badge}</span>}
			</Link>
			<button type="button" className={styles.favorite} onClick={() => setFavorite(toggleFavorite(product.id))} aria-label={favorite ? "Remove from favorites" : "Add to favorites"}>
				{favorite ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
			<div className={styles.content}>
				<div className={styles.meta}><span>{product.category}</span><span>{product.platform}</span></div>
				<Link href={`/product/${product.id}`} className={styles.titleLink}><h2>{product.title}</h2><HiArrowUpRight aria-hidden="true" /></Link>
				<p className={styles.description}>{product.shortDescription}</p>
				<div className={styles.footer}>
					<div className={styles.rating}><AiFillStar aria-hidden="true" /><strong>{product.rating}</strong><span>({product.reviews.toLocaleString("en-US")})</span></div>
					<strong className={styles.price}>${product.price.toFixed(2)}</strong>
				</div>
			</div>
		</article>
	);
}

export default SearchItem;
