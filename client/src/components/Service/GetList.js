import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function GetList({title="What you get?", value}) {
  let length = value.length;
  return (
		<Box>
			<Typography variant="h4" component="h4" align='center' fontWeight={600} sx={{mt: 10}}>
			{title}
		</Typography>
		<Grid container sx={{maxWidth: "1200px", px: 5, mx: "auto", mt: 10, mb: 10, fontWeight: 600}}>
			<Grid item xs={12} sm={4} sx={{px: 4,}}>
				<ul>
					{
						value.slice(0, Math.ceil(length/3)).map((item, i) => (
							<li key={i}>{item}</li>
						))
					}
				</ul>
			</Grid>
			<Grid item xs={12} sm={4} sx={{px: 4}}>
				<ul>
					{
						value.slice(Math.ceil(length/3), Math.ceil((length/3)*2)).map((item, i) => (
							<li key={i}>{item}</li>
						))
					}
				</ul>
			</Grid>
			<Grid item xs={12} sm={4} sx={{px: 4}}>
				<ul>
					{
						value.slice(Math.ceil((length/3)*2), length).map((item, i) => (
							<li key={i}>{item}</li>
						))
					}
				</ul>
			</Grid>
		</Grid>
		</Box>
  );
}

GetList.propTypes = {
	title: PropTypes.string,
	value: PropTypes.any
};