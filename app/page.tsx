"use client"
import { useState } from "react";
import TextField from '@mui/material/TextField';
import {BsDashCircle, BsPlusCircle} from "react-icons/bs";
import SearchItem from "@/component/searchItem/SearchItem";
import TopMenu from "@/component/topMenu/TopMenu";
import styles from "./page.module.css";

export default function Home() {

	const [value, setValue] = useState<string>('');
	const [visibleCategory, setVisibleCategory] = useState<boolean>(false);

	const setValueCategory = (e:any):void => {
		console.log('click');
		if(e.target.dataset.text){
			setValue(e.target.dataset.text);
		}
	}

  return (
		<div className="layout">
		<TopMenu />	
    <div className="content">
			<div className={styles.inputBox}>
				<TextField 
					sx={{flexGrow:1}}
					label="Search" 
					variant="outlined" 
					value={value} 
					onChange={e => (setValue(e.target.value))}
					placeholder="Search..."
				/>
				<div 
					className={styles.control}
					onClick={() => setVisibleCategory(prev => !prev)}
				>
					{visibleCategory
						?
						<BsDashCircle size={"24px"} color="#8d8484" />
						:
						<BsPlusCircle size={"24px"}  color="#8d8484" />
					}
				</div>
				{visibleCategory &&
					<div
						onClick={e => setValueCategory(e)}
						className={styles.categoryBox}
					>
						<span data-text="Playstation">Playstation</span>
						<span data-text="XBox">XBox</span>
						<span data-text="Windows">Windows</span>
						<span data-text="Linux">Linux</span>
						<span data-text="MacOs">MacOs</span>
					</div>
				}
			</div>

			<div className={styles.itemContainer}>
				<SearchItem id={1}/>
				<SearchItem id={2}/>
				<SearchItem id={3}/>
				<SearchItem id={4}/>
				<SearchItem id={5}/>
				<SearchItem id={6}/>
				<SearchItem id={7}/>
				<SearchItem id={8}/>
				<SearchItem id={9}/>
			</div>
		</div>		
		</div>
  )
}
