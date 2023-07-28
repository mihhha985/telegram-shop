"use client"
import { useState } from "react";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import {BsArrowUpCircleFill} from "react-icons/bs";
import {AiOutlineStar} from "react-icons/ai";

export default function Home() {

	const [value, setValue] = useState<string>('Input')

  return (
    <div className="content">

			<div className="search">
				<span className="active">Search</span>
				<span>Wallet</span>
				<span>Orders</span>
				<span>Info</span>
				<span>Favorites</span>
			</div>

			<div className="input-box">
				<input value={value} onChange={e => (setValue(e.target.value))}/>
				<div className="control">
					<span>prepared</span>
					<span></span>
				</div>
			</div>

			<div className="item-container">

				<div className="item-box">
					<div className="image-box">
						<Skeleton
							sx={{position:"absolute", top:0, left:0}} 
							variant="rectangular" 
							width={71} 
							height={91} />
						<span className="star-box">
							<AiOutlineStar color="#faaf00" />
						</span>
					</div>
					<div className="item-caption">
						<p>xbox game pass 1 year </p>
						<h4>Seller: Groovy</h4>
					</div>
					<div className="item-control">
						<h4>&#36; 39.29</h4>
						<div className="raiting-box">
							<Rating name="size-small" defaultValue={3} size="small" />
							<h6>1987 reviews</h6>
						</div>
						<Button variant="contained" size="small">
						<BsArrowUpCircleFill size={"16px"}/>	
						<span style={{position:"relative", left:"2px", top:"1px"}}>Add</span>
						</Button>
					</div>
				</div>

				<div className="item-box">
					<div className="image-box">
						<Skeleton
							sx={{position:"absolute", top:0, left:0}} 
							variant="rectangular" 
							width={71} 
							height={91} />
						<span className="star-box">
							<AiOutlineStar color="#faaf00" />
						</span>
					</div>
					<div className="item-caption">
						<p>xbox game pass 1 year for simple country vpn  mmchange best quality ever key </p>
						<h4>Seller: Groovy</h4>
					</div>
					<div className="item-control">
						<h4>&#36; 39.29</h4>
						<div className="raiting-box">
							<Rating name="size-small" defaultValue={3} size="small" />
							<h6>1987 reviews</h6>
						</div>
						<Button variant="contained" size="small">
						<BsArrowUpCircleFill size={"16px"}/>	
						<span style={{position:"relative", left:"2px", top:"1px"}}>Add</span>
						</Button>
					</div>
				</div>

				<div className="item-box">
					<div className="image-box">
						<Skeleton
							sx={{position:"absolute", top:0, left:0}} 
							variant="rectangular" 
							width={71} 
							height={91} />
						<span className="star-box">
							<AiOutlineStar color="#faaf00" />
						</span>
					</div>
					<div className="item-caption">
						<p>xbox game pass 1 year </p>
						<h4>Seller: Groovy</h4>
					</div>
					<div className="item-control">
						<h4>&#36; 39.29</h4>
						<div className="raiting-box">
							<Rating name="size-small" defaultValue={3} size="small" />
							<h6>1987 reviews</h6>
						</div>
						<Button variant="contained" size="small">
						<BsArrowUpCircleFill size={"16px"}/>	
						<span style={{position:"relative", left:"2px", top:"1px"}}>Add</span>
						</Button>
					</div>
				</div>

				<div className="item-box">
					<div className="image-box">
						<Skeleton
							sx={{position:"absolute", top:0, left:0}} 
							variant="rectangular" 
							width={71} 
							height={91} />
						<span className="star-box">
							<AiOutlineStar color="#faaf00" />
						</span>
					</div>
					<div className="item-caption">
						<p>xbox game pass 1 year </p>
						<h4>Seller: Groovy</h4>
					</div>
					<div className="item-control">
						<h4>&#36; 39.29</h4>
						<div className="raiting-box">
							<Rating name="size-small" defaultValue={3} size="small" />
							<h6>1987 reviews</h6>
						</div>
						<Button variant="contained" size="small">
						<BsArrowUpCircleFill size={"16px"}/>	
						<span style={{position:"relative", left:"2px", top:"1px"}}>Add</span>
						</Button>
					</div>
				</div>

			</div>

		</div>
  )
}
