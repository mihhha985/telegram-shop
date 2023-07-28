"use client"
import { useState } from "react";
import TextField from '@mui/material/TextField';
import {BsDashCircle, BsPlusCircle} from "react-icons/bs";
import SearchItem from "@/component/searchItem/SearchItem";

export default function Home() {

	const [value, setValue] = useState<string>('');
	const [visibleCategory, setVisibleCategory] = useState<boolean>(false);
	
	const heandleBlur = () => {	
		setTimeout(() => {
			setVisibleCategory(false);
		}, 200);
	}

	const setValueCategory = (e:any):void => {
		console.log('click');
		if(e.target.dataset.text){
			setValue(e.target.dataset.text);
		}
	}

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
				<TextField 
					onFocus={() => setVisibleCategory(true)}
					onBlur={heandleBlur}
					sx={{flexGrow:1}}
					label="Search" 
					variant="outlined" 
					value={value} 
					onChange={e => (setValue(e.target.value))}
					placeholder="Search..."
				/>
				<div className="control" onClick={() => setValue('')}>
					{value
						?
						<BsDashCircle size={"24px"} />
						:
						<BsPlusCircle size={"24px"} />
					}
				</div>
				{visibleCategory &&
					<div
						onClick={e => setValueCategory(e)}
						className="category-box"
					>
						<span data-text="Playstation">Playstation</span>
						<span data-text="XBox">XBox</span>
						<span data-text="Windows">Windows</span>
						<span data-text="Linux">Linux</span>
						<span data-text="MacOs">MacOs</span>
					</div>
				}
			</div>

			<div className="item-container">
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
			</div>

		</div>
  )
}
