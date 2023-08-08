"use client"

import {useEffect} from "react";
import { useRouter } from "next/navigation";
import {Button, Skeleton} from "@mui/material";
import styles from "./page.module.scss";

function Page() {

	const router = useRouter()

	useEffect(() => {
		let body = document.body;
		body.style.background = 'rgba(0, 0, 0, 0.05)';

		return () => {
			body.style.background = '#fff';
		}
	}, []);

	return ( 
		<div className={styles.totalOrderContainer}>
			<h3>Order #272105340</h3>
			<div className={styles.totalOrderBox}>
				<div
					onClick={() => router.push('/product/1')} 
					className={styles.item}>
					<div className={styles.itemImage}>
						<Skeleton
							variant="rectangular" 
							width={"100%"} 
							height={"100%"} 
						/>
					</div>
					<div className={styles.itemName}>
						xbox game pass 1 year
					</div>
					<div className={styles.itemPrice}>
						&#36; 39
					</div>
				</div>
				<div
					onClick={() => router.push('/product/2')}  
					className={styles.item}>
					<div className={styles.itemImage}>
						<Skeleton
							variant="rectangular" 
							width={"100%"} 
							height={"100%"} 
						/>
					</div>
					<div className={styles.itemName}>
						xbox game pass 1 year
					</div>
					<div className={styles.itemPrice}>
						&#36; 39
					</div>
				</div>
				<div className={styles.total}>
					<div>Total</div>
					<div>&#36; 78</div>
				</div>
			</div>

			<Button
			sx={{mt:"auto"}} 
			variant="contained" >
				Buy &#36; 78
			</Button>
		</div>
	);
}

export default Page;