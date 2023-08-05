"use client"
import { useRouter } from 'next/navigation';
import {Card, Grid, Box} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import {typeOrderStatus} from "@/types/orderType";
import cn from "classnames";
import styles from "./OrderItem.module.css";

function OrderItem({id, status, text}: 
	{id:number, status:typeOrderStatus, text: string}) {
	const router = useRouter();

	return ( 
		<Card
			onClick={() => router.push('/orders/' + id + '?status=' + status)} 
			variant="outlined" 
			sx={{marginTop:"10px"}}>
				<Grid p={"10px"} display="flex" columnGap="10px">
					<Box sx={{position:'relative', flex: "0 0 60px", height:"60px"}}>
						<Skeleton
							variant="rectangular" 
							width={"100%"} 
							height={"100%"} 
						/>
						<Box sx={{
							padding:"2px 6px",
							background:"rgba(250, 4, 4, 1)",
							borderRadius:"50%",
							fontSize:"12px",
							color:"#fff",
							position:"absolute",
							bottom:"-3px",
							right:"-3px"
						}}>1</Box>
					</Box>
					<p>{text}</p>
					<Grid 
						display="flex" 
						flexDirection="column" 
						alignItems="center" 
						justifyContent="center" 
						rowGap="10px" 
						ml="auto">
						<span style={{fontSize:"16px", fontWeight:600}}>$39.29</span>
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
					</Grid>
				</Grid>
			</Card>
	);
}

export default OrderItem;