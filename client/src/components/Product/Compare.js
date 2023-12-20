import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import CompareItem from "./CompareItem";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const CompareWrap = styled(Box)(() => ({
  maxWidth: "1400px",
  margin: "auto",
  borderTop: "1px solid #CCC",
  marginTop: "40px"
}));

const CompareItemBody = styled(Stack)(() => ({
  maxWidth: "1400px",
  border: "1px solid #CCC",
  margin: "auto",
  marginTop: 40,
}));

const CompareItemTitleWrap = styled(Stack)(() => ({
  marginTop: "auto"
}));

const CompareItemWrap = styled(Stack)(() => ({
  minWidth: "150px"
}));

export default function Compare({products}) {
  return (
      <CompareWrap>
        <Typography
          variant="h5"
          component="h5"
          sx={{mt: 2}}
          color='#c45500'
          fontWeight={600}
        >
          Compare with similar items
        </Typography>
        <CompareItemBody direction='row'>
          <CompareItemTitleWrap>
          </CompareItemTitleWrap>
          {
            products.map((item, i) => (
              <CompareItemWrap key={i} display={i >= 2 ? {sm: "flex", xs: "none"} : null }>
                <CompareItem product={item} />
              </CompareItemWrap>
            ))
          }
        </CompareItemBody>
      </CompareWrap>
  );
}

Compare.propTypes = {
  products: PropTypes.any
};