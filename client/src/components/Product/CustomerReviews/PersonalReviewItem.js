import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Moment from "react-moment";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const PersonalReviewItemWrap = styled(Box)(() => ({
  width: "100%",
  marginTop: "20px"
}));

export default function PersonalReviewItem({item}) {
  return (
    <PersonalReviewItemWrap>
      <Stack direction='row'>
        <Box
          component="img"
          alt="personal review"
          src="/account.jpg"
          sx={{
            width: "28px",
            mr: 1
          }}
        />
        <Typography
          variant="p"
          component="p"
          color='#000'
          sx={{fontSize: "14px"}}
        >
          {item.user.name}
        </Typography>
      </Stack>
      <Stack direction='row' alignItems='center'>
        <Rating
          name="simple-controlled"
          size="small"
          readOnly
          value={item.rating}
          precision={0.5}
        />
        <Typography
          variant="p"
          component="p"
          color='#000'
          sx={{ml: 1, fontSize: "14px"}}
          fontWeight={700}
        >
          {item.title}
        </Typography>
      </Stack>
      <Typography
        variant="p"
        component="p"
        color='#565959'
      >
        Reviewed in the United States on <Moment format="MMM Do YYYY">{item.date}</Moment>
      </Typography>

      <Typography
        variant="p"
        component="p"
        sx={{mt: 1}}
      >
        {item.content}
      </Typography>
    </PersonalReviewItemWrap>
  );
}

PersonalReviewItem.propTypes = {
  item: PropTypes.any,
};