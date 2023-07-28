"use client"
import { useState } from "react";
import TextField from '@mui/material/TextField';
import {BsDashCircle, BsPlusCircle} from "react-icons/bs";
import SearchItem from "@/component/searchItem/SearchItem";

export default function Home() {

	const [value, setValue] = useState<string>('');
	const [addCategory, setAddCategory] = useState<boolean>(false);
	const [visibleCategory, setVisibleCategory] = useState<boolean>(false);

	const heandleBlur = () => {
		if(value){
			setAddCategory(true);
		}else{
			setAddCategory(false);
		}

		setVisibleCategory(false);
	}

	const setValueCategory = (e:any):void => {
		if(e.target.dataset.text){
			setValue(e.target.dataset.text);
			setAddCategory(true);
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
				<div className="control">
					{addCategory 
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
			</div>

		</div>
  )
}
