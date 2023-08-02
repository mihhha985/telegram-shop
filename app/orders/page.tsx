import styles from './page.module.scss';
import OrderItem from '@/component/orderItem/OrderItem';

export enum typeOrderStatus {
	"Confirmed" = "Confirmed", 
	"Not confirmed" = "Not Confirmed", 
	"Dispute" = "Dispute", 
	"Closed" = "Closed"
};

function Page() {

	return ( 
		<div className={styles.orderContainer}>
			<h3>PURCHASES</h3>
			<OrderItem status={typeOrderStatus.Confirmed} text="xbox game pass 1 year for simple country vpn  mmchange best quality ever key" />
			<OrderItem status={typeOrderStatus['Not confirmed']} text="windows 11 activation key free and good quality" />
			<OrderItem status={typeOrderStatus['Not confirmed']} text="tokenizer xgamez 13" />
			<OrderItem status={typeOrderStatus.Dispute} text="vpn change best quality ever keys" />
			<OrderItem status={typeOrderStatus.Closed} text="iphone 13 pro max xxl future design very cheep" />
			<OrderItem status={typeOrderStatus.Confirmed} text="xbox game pass 1 year for simple country vpn  mmchange best quality ever key" />
			<OrderItem status={typeOrderStatus['Not confirmed']} text="windows 11 activation key free and good quality" />
			<OrderItem status={typeOrderStatus['Not confirmed']} text="tokenizer xgamez 13" />
			<OrderItem status={typeOrderStatus.Dispute} text="vpn change best quality ever keys" />
			<OrderItem status={typeOrderStatus.Closed} text="iphone 13 pro max xxl future design very cheep" />
			<OrderItem status={typeOrderStatus.Confirmed} text="xbox game pass 1 year for simple country vpn  mmchange best quality ever key" />
			<OrderItem status={typeOrderStatus['Not confirmed']} text="windows 11 activation key free and good quality" />
			<OrderItem status={typeOrderStatus['Not confirmed']} text="tokenizer xgamez 13" />
			<OrderItem status={typeOrderStatus.Dispute} text="vpn change best quality ever keys" />
			<OrderItem status={typeOrderStatus.Closed} text="iphone 13 pro max xxl future design very cheep" />
		</div>
	);
}

	export default Page;