"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './TopMenu.module.css';

function TopMenu() {
	const pathname = usePathname();
	return ( 
		<div className={styles.search}>
			<Link href="/" className={pathname === '/' ? styles.active : ''}>Search</Link>
			<Link href="/wallet" className={pathname === '/wallet' ? styles.active : ''}>Wallet</Link>
			<Link href="/orders" className={pathname === '/orders' ? styles.active : ''}>Orders</Link>
			<Link href="/info" className={pathname === '/info' ? styles.active : ''}>Info</Link>
			<Link href="/favorites" className={pathname === '/favorites' ? styles.active : ''}>Favorites</Link>
		</div>
	);
}

export default TopMenu;