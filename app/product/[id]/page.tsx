"use client"
import { useState } from "react";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import {Skeleton } from '@mui/material';
import {AiOutlineStar, AiTwotoneStar} from "react-icons/ai";
import {BsPlusCircleFill, BsDashCircleFill} from "react-icons/bs";
import ReviewsItem from "@/component/reviewsItem/ReviewsItem";
import cn from "classnames";
import styles from "./page.module.scss";

export default function Page({ params }: { params: { id: string } }) {
	const [favorite, setFavorite] = useState<boolean>(true);
	const [checked, setChecked] = useState<boolean>(false);
	const [reviewsHidden, setReviewsHidden] = useState<boolean>(false);
	console.log(params.id);
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
						<span
							onClick={() => setFavorite(prev => !prev)} 
							className={styles.starBox}>
							{favorite 
								?
								<AiOutlineStar color="#faaf00" />
								:
								<AiTwotoneStar color="#faaf00" />
							}
						</span>
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
						{checked
							?
								<Button
									sx={{display:'inline-flex', columnGap:'2px', width:"120px"}}
									onClick={() => setChecked(false)} 
									variant="contained" 
									color="error"
									size="small">	
									<BsDashCircleFill size={14} />	
									<span style={{position:"relative", top:"1px"}}>Remove</span>
								</Button>
							:
								<Button 
									sx={{display:'inline-flex', columnGap:'2px', width:"120px"}}
									onClick={() => setChecked(true)}
									variant="contained" 
									size="small">	
									<BsPlusCircleFill size={14} />	
									<span style={{position:"relative", top:"1px"}}>Add</span>
								</Button>
						}
					</div>
				</div>
				<div className={styles.descriptinBox}>
					<h4>Description</h4>
					<p>xbox game pass 1 year for simple country vpn change best quality ever key</p>
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