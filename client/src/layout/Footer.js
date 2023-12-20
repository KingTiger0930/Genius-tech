import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import data from "../data.json";

export default function Footer() {
  return (
		<Box>
			<Box backgroundColor='#262c4a' sx={{py: 2}}>
				<Grid container sx={{maxWidth: "1500px", mx: "auto", textAlign: {xs:"center", md: "left"}}}>
					<Grid item xs={12} md={12} sx={{px: 4}}>
						{/*<Typography variant="p" component="p">
				Please select at least one payment option to render widget preview
				</Typography>*/}
				<Stack justifyContent='start' flexDirection='row' sx={{mt: 1}}>
					<Box
					component="img"
					alt="master card"
					src="/payment/master.png"
					sx={{width: "50px", mr: 1}}
					/>
					<Box
					component="img"
					alt="visa card"
					src="/payment/visa.png"
					sx={{width: "50px", mr: 1}}
					/>
					<Box
					component="img"
					alt="paypal"
					src="/payment/paypal.png"
					sx={{width: "50px", mr: 1}}
					/>
					<Box
					component="img"
					alt="express"
					src="/payment/express.png"
					sx={{width: "50px", mr: 1}}
					/>
					<Box
					component="img"
					alt="all payment"
					src="/payment/all.png"
					sx={{width: "50px", mr: 1}}
					/>
				</Stack>
					</Grid>
				<Grid item xs={12} md={5} sx={{py: 5}}>
				<Stack sx={{p: 4}}>
					<Box
						component="img"
						alt="footer logo"
						src="/footer-logo.svg"
						sx={{ml: 1, mx: "auto"}}
					/>
				</Stack>
				</Grid>
				<Grid item xs={12} md={3} sx={{py: 5, px: 4, color: "white"}}>
				<Stack>
					<Typography variant="h5" component="h5">
					Contact
					</Typography>
					<Typography variant="p" component="p">
					Where to find us: 209 Fort York Blvd Toronto,<br/>
					ON M5V 4A1<br/><br/> 
					</Typography>
					<Typography variant="p" component="p">
					Genius Tech Inc.<br/>Phone: {data.phone}
					</Typography>
				</Stack>
				</Grid>
				<Grid item xs={12} md={2} sx={{py: {md: 5, xs: 0}, px: 4, color: "white"}}>
				<Stack>
					<Link rel="canonical" to='/about-us' >
					About us
					</Link>
					<Link rel="canonical" to='/subscribe' >
					Contact
					</Link>
				</Stack>
				</Grid>
				<Grid item xs={12} md={2} sx={{py: {md: 5, xs: 0}, px: 4, color: "white"}}>
				<Stack>
					<Link rel="canonical" to='/subscribe' >
					How to find us
					</Link>
				</Stack>
				</Grid>
				<Grid item xs={12} sx={{px: 4, pt: {md: 0, xs: 2}}}>
						<Typography variant="p" component="p" color='white'>
				Copyright © All Rights Reserved.
				</Typography>
					</Grid>
			</Grid>
				</Box>
			{/*<Grid backgroundColor='#111' display='flex' justifyContent='space-around' sx={{py: 5, borderTop:'1px solid white'}}>
				<Link rel="canonical" to='/a' style={{color: 'white', textDecoration: 'none', display: 'flex'}}>
					<span>Created with</span>
					<Box
				component="img"
				alt="logo"
				src="1und1-logo4.png"
				sx={{ml: 1}}
			/>
				</Link>
		</Grid>*/}
		</Box>
  );
}
