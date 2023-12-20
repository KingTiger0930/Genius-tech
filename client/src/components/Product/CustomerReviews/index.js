import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import GlobalRating from "./GlobalRating";
// import Byfeature from './Byfeature';
import ReviewProduct from "./ReviewProduct";
// import Advert from './Advert';

import ReviewImage from "./ReviewImage";
// import ReviewMention from './ReviewMention';
import TopReviews from "./TopReviews";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const CustomerReviewsWrap = styled(Box)(() => ({
  maxWidth: "1400px",
  borderTop: "1px solid #CCC",
  margin: "40px auto",
  marginBottom: "40px",
  width: "100%",
}));

export default function CustomerReviews({product, num}) {
  return (
      <CustomerReviewsWrap>
        <Grid container sx={{mx: "auto", mt: 5}}>
          <Grid item xs={12} sm={4} sx={{display: "flex"}}>
            <Box sx={{width: "100%"}}>
              <Typography
                variant="h5"
                component="h5"
                sx={{mb: 1}}
                color='#000'
                fontWeight={700}
              >
                Customer reviews
              </Typography>
              <GlobalRating />
              {/*<Byfeature />*/}
              <ReviewProduct num={num}/>
              {/*<Advert product={product}/>*/}
              {/*<Box
                component="img"
                alt="reviews"
                src="/ourservice/movetoaws.svg"
                sx={{
                  width: '350px',
                  my: {xs: 5, sm: 0}
                }}
              />*/}
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Stack>
              <ReviewImage product={product}/>
              {/*<ReviewMention />*/}
              <TopReviews topreview={[]}/>
            </Stack>
          </Grid>
        </Grid>
      </CustomerReviewsWrap>
  );
}

CustomerReviews.propTypes = {
  product: PropTypes.any,
  num: PropTypes.any,
};