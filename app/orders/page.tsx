import styles from './page.module.scss';
import OrderItem from '@/component/orderItem/OrderItem';
import TopMenu from '@/component/topMenu/TopMenu';
import {typeOrderStatus} from "@/types/orderType";

function Page() {

	return ( 
		<div className='layout'>
			<TopMenu />
			<div className={styles.orderContainer}>
				<h3>PURCHASES</h3>
				<OrderItem
					id={1} 
					status={typeOrderStatus.Confirmed} 
					text="xbox game pass 1 year for simple country vpn  mmchange best quality ever key" />
				<OrderItem
					id={2} 
					status={typeOrderStatus['Not confirmed']} 
					text="windows 11 activation key free and good quality" />
				<OrderItem
					id={3} 
					status={typeOrderStatus['Not confirmed']} 
					text="tokenizer xgamez 13" />
				<OrderItem
					id={4} 
					status={typeOrderStatus.Dispute} 
					text="vpn change best quality ever keys" />
				<OrderItem
					id={5} 
					status={typeOrderStatus.Closed} 
					text="iphone 13 pro max xxl future design very cheep" />
				<OrderItem
					id={6} 
					status={typeOrderStatus.Confirmed} 
					text="xbox game pass 1 year for simple country vpn  mmchange best quality ever key" />
				<OrderItem
					id={1} 
					status={typeOrderStatus.Confirmed} 
					text="xbox game pass 1 year for simple country vpn  mmchange best quality ever key" />
				<OrderItem
					id={2} 
					status={typeOrderStatus['Not confirmed']} 
					text="windows 11 activation key free and good quality" />
				<OrderItem
					id={3} 
					status={typeOrderStatus['Not confirmed']} 
					text="tokenizer xgamez 13" />
				<OrderItem
					id={4} 
					status={typeOrderStatus.Dispute} 
					text="vpn change best quality ever keys" />
				<OrderItem
					id={5} 
					status={typeOrderStatus.Closed} 
					text="iphone 13 pro max xxl future design very cheep" />
				<OrderItem
					id={6} 
					status={typeOrderStatus.Confirmed} 
					text="xbox game pass 1 year for simple country vpn  mmchange best quality ever key" />			
			</div>
		</div>	
	);
}

	export default Page;