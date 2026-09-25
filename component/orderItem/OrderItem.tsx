"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {Card} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import {getProduct} from '@/data/products';
import {typeOrderStatus} from "@/types/orderType";
import cn from "classnames";
import styles from "./OrderItem.module.css";

function OrderItem({id, status, address}: {id:number, status:typeOrderStatus, address:string}) {
	const router = useRouter();
	const product = getProduct(id);

	return ( 
		<Card
			onClick={() => router.push('/orders/' + id)}
			className={styles.orderItem}
			variant="outlined">
				<div className={styles.imageBox}>
					{product && <Image src={product.image} alt="" fill sizes="76px" />}
				</div>
				<div className={styles.orderContent}>
					<span className={styles.orderNumber}>Order #{id}</span>
					<p>{product?.title ?? "Product"}</p>
					<span className={styles.address}>Address: {address}</span>
					<div className={styles.orderBottom}>
						<div className={cn(styles.orderStatus, {
							[styles.orderConfirmed]: status === typeOrderStatus.Confirmed,
							[styles.orderNotConfirmed]: status === typeOrderStatus['Not confirmed'],
							[styles.orderDispute]: status === typeOrderStatus.Dispute,
							[styles.orderClosed]: status === typeOrderStatus.Closed
						})}>			
							{status === typeOrderStatus.Confirmed && <CheckIcon fontSize="inherit"/>} 
							{status === typeOrderStatus['Not confirmed'] && <AccessTimeRoundedIcon fontSize="inherit"/>}
							{status === typeOrderStatus.Closed && <ClearIcon fontSize="inherit"/>} 
							{status === typeOrderStatus.Dispute && <ClearIcon fontSize="inherit"/>} 
							<span>{status}</span>
						</div>
						<strong>${(product?.price ?? 39.29).toFixed(2)}</strong>
					</div>
				</div>
			</Card>
	);
}

export default OrderItem;
