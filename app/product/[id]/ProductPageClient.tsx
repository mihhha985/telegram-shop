"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FiArrowLeft, FiCheck, FiMinus, FiPlus, FiShield } from "react-icons/fi";
import TopMenu from "@/component/topMenu/TopMenu";
import { getProduct } from "@/data/products";
import { getFavoriteIds, toggleFavorite } from "@/data/favorites";
import styles from "./page.module.scss";

const testimonials = [
	{ name: "Maya R.", date: "2 days ago", text: "Everything felt considered—from the clear product details to the instant delivery. Exactly the kind of digital shop I wish more stores were." },
	{ name: "Alex K.", date: "1 week ago", text: "A genuinely polished release. Setup took less than a minute, and the experience matched the description perfectly." },
];

export default function ProductPageClient({ productId }: { productId: string }) {
	const product = getProduct(Number(productId));
	const [favorite, setFavorite] = useState(false);
	const [added, setAdded] = useState(false);
	useEffect(() => setFavorite(getFavoriteIds().includes(Number(productId))), [productId]);

	if (!product) {
		return <div className="layout"><TopMenu /><main className={styles.notFound}><span>404</span><h1>Product not found</h1><Link href="/">Return to collection</Link></main></div>;
	}

	return (
		<div className="layout">
			<TopMenu />
			<main className={styles.main} style={{ "--product-accent": product.accent } as React.CSSProperties}>
				<Link href="/" className={styles.back}><FiArrowLeft /> Back to collection</Link>
				<section className={styles.product}>
					<div className={styles.visual}>
						<Image src={product.image} alt={`${product.title} product artwork`} fill priority sizes="(max-width: 900px) 100vw, 52vw" className={styles.image} />
						<div className={styles.visualOverlay} />
						<span className={styles.visualLabel}>{product.category} · Digital edition</span>
					</div>

					<div className={styles.details}>
						<div className={styles.topline}><span>{product.platform}</span><button type="button" onClick={() => setFavorite(toggleFavorite(product.id))} aria-label="Toggle favorite">{favorite ? <AiFillHeart /> : <AiOutlineHeart />}</button></div>
						<h1>{product.title}</h1>
						<p className={styles.intro}>{product.shortDescription}</p>
						<div className={styles.rating}><span><AiFillStar /> {product.rating}</span><span>{product.reviews.toLocaleString("en-US")} verified reviews</span></div>
						<div className={styles.purchase}>
							<div><small>One-time purchase</small><strong>${product.price.toFixed(2)}</strong></div>
							<button type="button" onClick={() => setAdded((current) => !current)} className={added ? styles.added : ""}>{added ? <><FiMinus /> Remove from cart</> : <><FiPlus /> Add to cart</>}</button>
						</div>
						<div className={styles.assurance}><FiShield /><span><strong>Protected purchase</strong><small>Instant delivery and a 14-day support window</small></span></div>
						<p className={styles.seller}>Curated by <strong>{product.seller}</strong></p>
					</div>
				</section>

				<section className={styles.story}>
					<div><span className={styles.index}>01 / Overview</span><h2>Made to stay<br />with you.</h2></div>
					<div className={styles.description}><p>{product.description}</p><ul>{product.features.map((feature) => <li key={feature}><FiCheck />{feature}</li>)}</ul></div>
				</section>

				<section className={styles.reviews}>
					<div className={styles.sectionTitle}><div><span className={styles.index}>02 / Community</span><h2>What players say</h2></div><span>{product.rating} out of 5</span></div>
					<div className={styles.reviewGrid}>{testimonials.map((review) => <article key={review.name}><div><strong>{review.name}</strong><span>{review.date}</span></div><div className={styles.stars}>{[1,2,3,4,5].map((star) => <AiFillStar key={star} />)}</div><p>{review.text}</p></article>)}</div>
				</section>
			</main>
		</div>
	);
}
