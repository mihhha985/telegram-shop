"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import {AiOutlineStar, AiTwotoneStar} from "react-icons/ai";
import {BsPlusCircleFill, BsDashCircleFill} from "react-icons/bs";
import styles from "./SearchItem.module.css";

function SearchItem({id} : {id:number}) {
	const router = useRouter();
	const [favorite, setFavorite] = useState<boolean>(true);
	const [checked, setChecked] = useState<boolean>(false);
	
	return ( 
		<div 
			onClick={() => router.push('/product/' + id)}
			className={styles.itemBox}>
					<div className={styles.imageBox}>
						<Skeleton
							sx={{position:"absolute", top:0, left:0}} 
							variant="rectangular" 
							width={71} 
							height={91} 
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
						<p>xbox game pass 1 year </p>
						<h4>Seller: Groovy</h4>
					</div>
					<div className={styles.itemControl}>
						<h4>&#36; 39.29</h4>
						<div className="raiting-box">
							<Rating name="size-small" defaultValue={3} size="small" />
							<h6>1987 reviews</h6>
						</div>
						{checked
							?
							<Button
								sx={{display:'inline-flex', columnGap:'2px'}}
								onClick={() => setChecked(false)} 
								variant="contained" 
								color="error"
								size="small">	
								<BsDashCircleFill size={14} />	
								<span style={{position:"relative", top:"1px"}}>Remove</span>
							</Button>
							:
							<Button 
								sx={{display:'inline-flex', columnGap:'2px'}}
								onClick={() => setChecked(true)}
								variant="contained" 
								size="small">	
								<BsPlusCircleFill size={14} />	
								<span style={{position:"relative", top:"1px"}}>Add</span>
							</Button>
						}
					</div>
				</div>

	);
}

export default SearchItem;