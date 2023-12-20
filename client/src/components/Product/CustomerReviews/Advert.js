import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AdvertCard from "../AdvertCard";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const AdvertWrap = styled(Box)(() => ({
  width: "60%",
  borderTop: "1px solid #CCC",
  marginTop: "40px",
  paddingTop: "20px"
}));

export default function Advert({product}) {
  return (
    <AdvertWrap>
      <Typography
        variant="p"
        component="p"
        sx={{mb: 1, fontSize: "20px"}}
        color='#000'
        fontWeight={700}
      >
        Review this product
      </Typography>
      <Typography
        variant="p"
        component="p"
        sx={{mb: 1, fontSize: "14px"}}
        color='#000'
      >
        Share your thoughts with other customers
      </Typography>

      <AdvertCard product={product}/>
    </AdvertWrap>
  );
}

Advert.propTypes = {
  product: PropTypes.any
};
