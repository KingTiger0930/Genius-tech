import React from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import ProgressBar from "./ProgressBar";
import PropTypes from "prop-types";

import { connect } from "react-redux";

function GlobalRating({review}) {
	let {ratingcount, count} = review;

	let totalrating = 0;

	for (var i = 0, s = 5; i < ratingcount.length; i++, s--) {
		totalrating += s * ratingcount[i];
	}

	totalrating = count !== 0 ? totalrating/count : 0;
  return (
		<>
			<Stack direction='row'>
			<Rating
				name="simple-controlled"
				value={totalrating}
				readOnly
			/>
			<Typography
				variant="p"
				component="p"
				sx={{ml: 1, fontSize: "20px"}}
				color='#000'
			>
				{totalrating} out of 5
			</Typography>
			</Stack>
			<Typography
			variant="p"
			component="p"
			color='#565959'
			>
			{count} global ratings
			</Typography>
			{
				ratingcount.map((item, i) => <ProgressBar key={i} title={(5-i)+" star"} percent={count !== 0 ? (item/count)*100 : 0}/>)
			}
		</>
  );
}

GlobalRating.propTypes = {
	review: PropTypes.any,
};

const mapStateToProps = state => ({
  review: state.review
});

export default connect(
  mapStateToProps,
  {  }
)(GlobalRating);