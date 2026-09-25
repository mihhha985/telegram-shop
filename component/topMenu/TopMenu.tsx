"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiCompass, FiCreditCard, FiHeart, FiPackage, FiShoppingBag } from "react-icons/fi";
import styles from "./TopMenu.module.css";

const links = [
	{ href: "/", label: "Explore", icon: FiCompass },
	{ href: "/favorites", label: "Favorites", icon: FiHeart },
	{ href: "/orders", label: "Orders", icon: FiPackage },
	{ href: "/wallet", label: "Wallet", icon: FiCreditCard },
];

function TopMenu() {
	const pathname = usePathname();
	return (
		<>
			<header className={styles.header}>
				<Link href="/" className={styles.brand} aria-label="Arcadia Market home"><span>A</span><strong>Arcadia</strong></Link>
				<Link href="/orders/total" className={styles.cart}><FiShoppingBag aria-hidden="true" /><span>Cart</span><b>2</b></Link>
			</header>
			<nav className={styles.navigation} aria-label="Primary navigation">
				{links.map((link) => <Link key={link.href} href={link.href} className={pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/")) ? styles.active : ""}><link.icon aria-hidden="true" /><span>{link.label}</span></Link>)}
			</nav>
		</>
	);
}

export default TopMenu;
