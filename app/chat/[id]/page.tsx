"use client"
import {useState, useRef, RefObject} from "react";
import { useSearchParams } from 'next/navigation';
import {typeOrderStatus} from "@/types/orderType";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import {RiSendPlaneFill} from "react-icons/ri";
import { MessageType } from "@/types/messageType";
import cn from "classnames";
import styles from './page.module.scss';

function Page({ params }: { params: { id: string } }) {

	const boxRef = useRef(null) as RefObject<HTMLDivElement>;
	const searchParams = useSearchParams();
	const status = searchParams.get('status');
	const [value, setValue] = useState<string>('');
	const [mesage, setMessage] = useState<MessageType[]>([
		{
			username:'alex', 
			text: 'Если бы вы могли выйти на сцену и сделать доклад, о чём бы вы рассказали?', 
			date: '24.11.2022',
			type: 'user'
		},
		{
			username:'alex', 
			text: 'Почему ваш шеф был самым лучшим?', 
			date: '25.11.2022',
			type: 'user'
		},
		{
			username:'admin', 
			text: 'Какую работу вы бы порекомендовали человеку, который только начинает свою карьеру?', 
			date: '26.11.2022',
			type: 'admin'
		},
	]);

	const send = () => {
		let now = new Date(Date.now());
		let dates = '0' + now.getDate() + '.' + '0' +(now.getMonth() + 1) + '.' + now.getFullYear();
		const data = {
			username:'alex',
			text: value,
			date: dates,
			type:'user'
		} as MessageType;

		if(value) {
			setMessage([...mesage, data]);
			setValue('');
		}
	}

	return ( 
		<div
			ref={boxRef} 
			className={styles.chatContainer}>
			<div className={styles.infoBox}>
				<p>id: {params.id} xbox game pass 1 year </p>
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
			<div className={styles.messageBox}>
				{mesage && mesage.map((item, index) => 
				 	<div key={index} className={cn(styles.message, {
						[styles.user]: item.type === 'user',
						[styles.admin]: item.type === 'admin',
					})}>
						<p>{item.text}</p>
						<h6>
							<span className={styles.name}>{item.username}</span>
							<span className={styles.date}>{item.date}</span>
						</h6>
					</div>
				)}
			</div>
			<div className={styles.sendForm}>
				<textarea
					value={value} 
					onChange={e => setValue(e.target.value)}
					onFocus={() => {
						let ref = boxRef.current;
						if(ref) ref.style.height = '140vh';
					}}
					onBlur={() => {
						let ref = boxRef.current;
						if(ref) ref.style.height = '100%';
					}}
					placeholder='Type your message...'>	
				</textarea>
				<button onClick={send}>
					<RiSendPlaneFill style={{position:"relative", top:"2px", right:"2px"}}/>
					<span>Send</span>
				</button>
			</div>
		</div>
	);
}

export default Page;