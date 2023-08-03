"use client";
import { useState } from 'react';
import {Box, Stack, Card, Typography, Button, TextField} from '@mui/material';
import {AiOutlineEdit} from "react-icons/ai"

export default function Page() {

	const [username, setUsername] = useState<string>('Groovy');
	const [isInput, setIsInput] = useState<boolean>(false);

  return (
    <Stack sx={{ width: '100%', mt:"25px" }} spacing={2}>
			<Box>
				<Typography
					sx={{
						fontSize: "14px",
						fontWeight: 400,
						color: "var(--second-text-color)",
						textTransform: "uppercase"
					}} 
					variant="h3" 
					gutterBottom>
					information
				</Typography>
				<Card variant="outlined" sx={{mt:"10px", p:"10px"}}>
					<Typography variant="body1" gutterBottom>id: 515337377223</Typography>
					{isInput 
						?
						<TextField
							onBlur={() => setIsInput(false)}
							onChange={e => setUsername(e.target.value)}
							label="your name" 
							variant="standard" 
						/>
						:
						<Typography variant="body1" mb={0} gutterBottom>
							<span>your name:</span>
							<span>{username}</span>
							<Button
								onClick={() => setIsInput(true)}
								variant="text" 
								sx={{minWidth:"auto"}}>
								<AiOutlineEdit />
							</Button>
						</Typography>
					}
				</Card>
			</Box>

			<Box>
				<Typography
					sx={{
						fontSize: "14px",
						fontWeight: 400,
						color: "var(--second-text-color)",
						textTransform: "uppercase"
					}} 
					variant="h3" 
					gutterBottom>
					SUPPORT
				</Typography>
				<Card variant="outlined" sx={{mt:"10px", p:"10px"}}>
					<Typography variant="body1"  mb={0} gutterBottom>
						<span>support:</span> 
						<Button href="https://t.me/PremiumBot">@support_bot</Button>
					</Typography>
				</Card>
			</Box>

			<Box>
				<Typography
					sx={{
						fontSize: "14px",
						fontWeight: 400,
						color: "var(--second-text-color)",
						textTransform: "uppercase"
					}} 
					variant="h3" 
					gutterBottom>
					RULES
				</Typography>
				<Card 
					variant="outlined"
					className="scroll" 
					sx={{mt:"10px", p:"10px", height:"300px"}}>
					<Stack sx={{ width: '100%'}}>
						<Box>
							<Typography variant="body1" gutterBottom>
								First rule
							</Typography>
							<Typography variant="body2" gutterBottom color="GrayText">
								xbox game pass 1 year for simple country vpn change best quality ever key
							</Typography>
						</Box>
						<Box>
							<Typography variant="body1" gutterBottom>
								Second rule
							</Typography>
							<Typography variant="body2" gutterBottom color="GrayText">
								xbox game pass 1 year for simple country vpn change best quality ever key
							</Typography>
						</Box>
						<Box>
							<Typography variant="body1" gutterBottom>
								Third rule
							</Typography>
							<Typography variant="body2" gutterBottom color="GrayText">
								xbox game pass 1 year for simple country vpn change best quality ever key
							</Typography>
						</Box>
						<Box>
							<Typography variant="body1" gutterBottom>
								Third rule
							</Typography>
							<Typography variant="body2" gutterBottom color="GrayText">
								xbox game pass 1 year for simple country vpn change best quality ever key
							</Typography>
						</Box>
						<Box>
							<Typography variant="body1" gutterBottom>
								Third rule
							</Typography>
							<Typography variant="body2" gutterBottom color="GrayText">
								xbox game pass 1 year for simple country vpn change best quality ever key
							</Typography>
						</Box>
					</Stack>
				</Card>
			</Box>

    </Stack>
  );
}