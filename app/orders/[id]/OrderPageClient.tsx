"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import {BsPlusCircleFill} from "react-icons/bs";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import ReviewsItem from "@/component/reviewsItem/ReviewsItem";
import TopMenu from "@/component/topMenu/TopMenu";
import {getProduct} from "@/data/products";
import {getOrder} from "@/data/orders";
import {typeOrderStatus} from "@/types/orderType";
import cn from "classnames";
import styles from "./page.module.scss";

export default function OrderPageClient({ orderId }: { orderId: string }) {
	const [confirmed, setConfirmed] = useState<boolean>(false);
	const [dispute, setDisput] = useState<boolean>(false);
	const [reviewsHidden, setReviewsHidden] = useState<boolean>(false);
	const product = getProduct(Number(orderId));
	const order = getOrder(Number(orderId));
	const status = order?.status;
	const router = useRouter();
  return(
		<div className="layout">
			<TopMenu />
			<div className={styles.productContainer}>
				<div className={styles.itemBox}>
					<div className={styles.imageBox}>
						{product && <Image src={product.image} alt="" fill sizes="76px" />}
					</div>
					<div className={styles.itemCaption}>
						<p>&#36; {(product?.price ?? 39.29).toFixed(2)}</p>
						<p>{product?.title ?? 'Product'}</p>
						<div className={styles.raitingBox}>
							<Rating name={`order-rating-${orderId}`} defaultValue={3} size="small" readOnly />
							<h6>1987 reviews</h6>
						</div>
						<h4>Seller: {product?.seller ?? 'Groovy'}</h4>
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
							<span style={{textTransform:"uppercase", whiteSpace:"nowrap" }}>{status}</span>
						</div>
					</div>
				</div>
				{order && <div className={styles.transactionBox}><span>Transaction address</span><code>{order.address}</code></div>}
				<div className={styles.descriptinBox}>
					<h4>Description</h4>
					<p>{product?.shortDescription ?? 'Product details'}</p>
				</div>
				<div className={styles.buttonContainer}>
					<Button 
						variant="contained" 
						onClick={() => {if(!confirmed) setConfirmed(true)}}
						disabled={confirmed ? true : false}>
						<BsPlusCircleFill />
						<span>
							{confirmed 
							?
							'Confirmed'
							:
							'Confirm delivery'}
						</span>
					</Button>
					<Button 
						onClick={() => setDisput(prev => !prev)}
						variant="contained">
						<BsPlusCircleFill />
						<span>
							{dispute
							?
							'Close dispute'
							:
							'Open dispute'
							}
							</span>
					</Button>
					<Button
						onClick={() => router.push('/chat/' + orderId)} 
						variant="contained">
						<BsPlusCircleFill />
						<span>Chat</span>
						<span className={styles.marker}>2</span>
					</Button>
				</div>
				<h4 style={{marginTop:"15px"}}>Reviews</h4>
				<div className={cn(styles.reviewsBox, {[styles.hidden]: reviewsHidden})}>
					<div className={styles.reviewsContainer}>
						<ReviewsItem heandler={setReviewsHidden} />
						<ReviewsItem heandler={setReviewsHidden} />
						<ReviewsItem heandler={setReviewsHidden} />
						<ReviewsItem heandler={setReviewsHidden} />
					</div>	
				</div>	
			</div>
		</div>
	)
}
