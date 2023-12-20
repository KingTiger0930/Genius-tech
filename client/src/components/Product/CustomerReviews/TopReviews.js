import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/material/styles";

import PersonalReviewItem from "./PersonalReviewItem";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const TopReviewsWrap = styled(Box)(() => ({
  width: "80%",
  marginBottom: "50px"
}));

function TopReviews({review}) {

  let { topreviews } = review;

  return (
    <TopReviewsWrap>
      <Typography
        variant="p"
        component="p"
        sx={{fontSize: "20px"}}
        color='#000'
        fontWeight={700}
      >
        Top reviews from the United States
      </Typography>
      
      <Stack direction='column'>
        {topreviews.map((item, i) => <PersonalReviewItem key={i} item={item} />)}
      </Stack>
    </TopReviewsWrap>
  );
}

TopReviews.propTypes = {
  topreview: PropTypes.any,
  review: PropTypes.any
};

const mapStateToProps = state => ({
  review: state.review
});

export default connect(
  mapStateToProps,
  {  }
)(TopReviews);