"use client";
import {useState, useRef, RefObject} from "react";
import Button from '@mui/material/Button';
import {BsCurrencyBitcoin, BsArrowUpCircleFill, BsFillPlusCircleFill} from "react-icons/bs";
import {AiOutlineCopy, AiFillCopy} from "react-icons/ai";
import TransactionItem from "@/component/transactionItem/TransactionItem";
import styles from "./page.module.scss";

function Page() {

	const [isCopy, setIsCopy] = useState<boolean>(false);
	const [showToolkit, setShowToolkit] = useState<boolean>(false);
	const [confirm, setConfirm] = useState<boolean>(true);
	const addrRef = useRef() as RefObject<HTMLParagraphElement> | null;
	const heandleClick = () => {
		const target = document.getElementById('btc-addr') as HTMLParagraphElement;
		var rng, sel;
    if (document.createRange) {
      rng = document.createRange();
      rng.selectNode(target)
      sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(rng);
			try {  
				// Теперь, когда мы выбрали текст ссылки, выполним команду копирования
				var successful = document.execCommand('copy');  
				var msg = successful ? 'successful' : 'unsuccessful';  
				console.log('Copy email command was ' + msg);  
				setIsCopy(true);
				setShowToolkit(true)
			} catch(err) {  
				console.log('Oops, unable to copy'); 
				setIsCopy(false); 
			} 
			
			window.getSelection()?.removeAllRanges(); 
			setTimeout(() => setShowToolkit(false), 1200);
    }
	}

	return ( 
		<div className="content">
			<div className={styles.walletConfirm}>
				<h4>Balance</h4>
				<h3>
					<span style={{position:"relative", bottom:"6px"}}>0,001</span> 
					<BsCurrencyBitcoin color="#8d8484"/>
				</h3>
				<div className={styles.addrBox}>
					<p id="btc-addr">bc1pyujgt9zhj8nsjgf5kg3d8tg673<br />0f0lh5mml7s2aeuutu4s7f39s5puyka</p>
					{showToolkit && <div className={styles.toolkit}>copied</div>}
				</div>
				<h5 onClick={heandleClick}>
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
	);
}

export default Page;