import {BsArrowUpCircleFill} from "react-icons/bs";
import styles from "./TransactionItem.module.scss";

function TransactionItem({efect}: {efect:boolean}) {
	
	return ( 
		<div className={styles.transactionItem}>
			<div className={styles.arrowBox}>
				<BsArrowUpCircleFill size={20} color="#fff" />
			</div>
			<div className={styles.transactionItemAddr}>
				<p>8a9c4xf...5gh92ff</p>
				<p>29 may at 22:46</p>
			</div>
			{efect
				?
				<div className={styles.transactionItemCount}>
					<p style={{color:'rgba(52, 199, 89, 1)'}}>+0,003631 BTC</p>
					<p style={{color:'rgba(52, 199, 89, 1)'}}>Confirmation</p>
				</div>
				:
				<div className={styles.transactionItemCount}>
					<p>+0,003631 BTC</p>
					<p>Confirmation</p>
				</div>
			}
		</div>	
	);
}

export default TransactionItem;