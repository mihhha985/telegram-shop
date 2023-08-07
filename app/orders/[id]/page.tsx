"use client"
import { useState } from "react";
import { useSearchParams, useRouter } from 'next/navigation'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import {Skeleton } from '@mui/material';
import {BsPlusCircleFill} from "react-icons/bs";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import ReviewsItem from "@/component/reviewsItem/ReviewsItem";
import {typeOrderStatus} from "@/types/orderType";
import cn from "classnames";
import styles from "./page.module.scss";

export default function Page({ params }: { params: { id: string } }) {
	const [confirmed, setConfirmed] = useState<boolean>(false);
	const [dispute, setDisput] = useState<boolean>(false);
	const [reviewsHidden, setReviewsHidden] = useState<boolean>(false);
	const searchParams = useSearchParams();
	const status = searchParams.get('status');
	const router = useRouter();
	console.log(status);
  return(
		<div className="layout">
			<div className={styles.productContainer}>
				<div className={styles.itemBox}>
					<div className={styles.imageBox}>
						<Skeleton
							sx={{position:"absolute", top:0, left:0}} 
							variant="rectangular" 
							width={121} 
							height={155} 
						/>
					</div>
					<div className={styles.itemCaption}>
						<p>&#36; 39.29</p>
						<p>xbox game pass 1 year </p>
						<div className={styles.raitingBox}>
							<Rating name="size-small" defaultValue={3} size="small" />
							<h6>1987 reviews</h6>
						</div>
						<p>Sells: 2</p>
						<h4>Seller: Groovy</h4>
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
				<div className={styles.descriptinBox}>
					<h4>Description</h4>
					<p>xbox game pass 1 year for simple country vpn change best quality ever key</p>
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
						onClick={() => router.push('/chat/' + params.id + '?status=' + status)} 
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