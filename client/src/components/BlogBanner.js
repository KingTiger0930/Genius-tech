import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const BlogBannerWrap = styled(Grid)(() => ({
  marginLeft: 0,
  backgroundColor: "#f1f1f1",
  width: "100%",
  marginTop: "95px"
}));

const BlogBannerBody = styled(Box)(() => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "450px",
}));

export default function BlogBanner({img}) {
  return (
    <>
    <BlogBannerWrap justifyContent='center'>
      <BlogBannerBody
        sx={{backgroundImage: `url(${img})`}}
        alt="blog banner image"
        title="blog banner tooltip"
          />
    </BlogBannerWrap>
    </>
  );
}

BlogBanner.propTypes = {
  img: PropTypes.any
};