import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Contact() {
  return (
		<Box>
		<Typography variant="h4" component="h4" align='center' fontWeight={600} sx={{mt: 10}}>
			Get Started
		</Typography>
		<Grid container sx={{maxWidth: "1200px", px: 5, mx: "auto", mt: 10, mb: 10}}>
			<Grid item xs={12} sm={4} sx={{px: 4}}>
				<TextField
					className="outlined-name"
					label="Name"
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} sm={4} sx={{px: 4}}>
				<TextField
					className="outlined-name"
					label="Email"
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} sm={4} sx={{px: 4}}>
				<TextField
					className="outlined-name"
					label="Phone"
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} sm={12} sx={{px: 4, mt: 4}}>
				<TextField
					className="outlined-name"
					label="Message"
					rows={4}
					fullWidth
					multiline
				/>
			</Grid>
			<Grid item xs={12} sm={12} sx={{px: 4, mt: 4}} display='flex' justifyContent='end'>
				<Button variant="contained" sx={{px: 5, py: 1}}>Send Message</Button>
			</Grid>
		</Grid>
		</Box>
  );
}
