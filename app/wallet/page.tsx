"use client";
import {useState, useRef} from "react";
import Button from '@mui/material/Button';
import {FaDollarSign} from "react-icons/fa";
import {BsCurrencyBitcoin, BsArrowUpCircleFill, BsFillPlusCircleFill} from "react-icons/bs";
import {AiOutlineCopy, AiFillCopy} from "react-icons/ai";
import TransactionItem from "@/component/transactionItem/TransactionItem";
import TopMenu from "@/component/topMenu/TopMenu";
import styles from "./page.module.scss";

function Page() {

	const [isCopy, setIsCopy] = useState<boolean>(false);
	const [showToolkit, setShowToolkit] = useState<boolean>(false);
	const [confirm, setConfirm] = useState<boolean>(true);
	const [balance, setBalance] = useState<boolean>(true);
	const addrRef = useRef<HTMLParagraphElement>(null);
	const handleCopy = async () => {
		const address = addrRef.current?.innerText.replace(/\s/g, '');
		if (!address) return;

		try {
			await navigator.clipboard.writeText(address);
			setIsCopy(true);
			setShowToolkit(true);
			setTimeout(() => setShowToolkit(false), 1200);
		} catch {
			setIsCopy(false);
		}
	}

	return ( 
		<div className="layout">
		<TopMenu />	
		<div className="content">
			<div className={styles.walletConfirm}>
				<h4>Balance</h4>
				{balance 
					?
					<h3 onClick={() => setBalance(false)}>
						<span style={{position:"relative", bottom:"6px"}}>0,001</span> 
						<BsCurrencyBitcoin color="#8d8484"/>
					</h3>
					:
					<h3 onClick={() => setBalance(true)}>
						<span style={{position:"relative", bottom:"6px"}}>32</span> 
						<FaDollarSign color="#8d8484"/>
					</h3>
				}
				<div className={styles.addrBox}>
					<p ref={addrRef}>bc1pyujgt9zhj8nsjgf5kg3d8tg673<br />0f0lh5mml7s2aeuutu4s7f39s5puyka</p>
					{showToolkit && <div className={styles.toolkit}>copied</div>}
				</div>
				<h5 onClick={handleCopy}>
					{isCopy 
						?
						<AiFillCopy />
						:
						<AiOutlineCopy /> 
					}
					<span>copy</span>
				</h5>
				{confirm
					?
					<Button
						onClick={() => setConfirm(false)} 
						sx={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", gap:"5px"}}
						variant="contained">
						<BsArrowUpCircleFill size={18}/>
						<span style={{position:"relative", top:"2px"}}>Confirm</span>
					</Button>
					:
					<Button
						onClick={() => setConfirm(true)}  
						sx={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", gap:"5px"}}
						variant="contained">
						<BsFillPlusCircleFill size={18}/>
						<span style={{position:"relative", top:"2px"}}>In progress...</span>
					</Button>
				}
			</div>
			<div className={styles.transactionContainer}>
				<h3>transactions</h3>
				<TransactionItem efect={false} />
				<TransactionItem efect={true} />
				<TransactionItem efect={true} />
				<TransactionItem efect={true} />
				<TransactionItem efect={false} />
				<TransactionItem efect={false} />
				<TransactionItem efect={true} />
				<TransactionItem efect={true} />
				<TransactionItem efect={true} />
				<TransactionItem efect={false} />
			</div>
		</div>
		</div>
	);
}

export default Page;
