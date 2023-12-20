import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import './../../assets/style.css';

export default function ProductItem({item}) {
  return (
		<Box sx={{px: 4, maxWidth: "200px",}}>
		<Link rel="canonical" to='/#' className="CarouselItem">
			<Stack direction='column'>
				<Box
					component="img"
					alt="product item"
					title="product item tooltip"
					src={item.images[0].url}
					sx={{
					width: {
						md: "150px",
						xs: "90px"
					},
					}}
				/>
				<Typography variant="p" component="p" color='#007185' sx={{height: "50px", overflow: "hidden"}}>{item.title}</Typography>
			</Stack>
			</Link>
		<Stack direction='row'>
			<Rating
				name="simple-controlled"
				value={item.rating}
				readOnly
				size='small'
			/>
			{/*<Typography variant="p" component="p">0</Typography>*/}
		</Stack>
		<Stack direction='row'>
			<Typography variant="h5" component="h5">${item.price}</Typography>
		</Stack>
		</Box>
  );
}

ProductItem.propTypes = {
	item: PropTypes.any
};