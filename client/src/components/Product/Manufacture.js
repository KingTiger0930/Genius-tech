import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const ManufactureWrap = styled(Box)(() => ({
  maxWidth: "1400px",
  borderTop: "1px solid #CCC",
  margin: "40px auto",
  marginBottom: 0,
  width: "100%",
}));

export default function Manufacture({img}) {
  return (
      <ManufactureWrap>
        <Typography
          variant="p"
          component="p"
          sx={{mt: 2, mb: 1, fontSize: "18px"}}
          color='#c45500'
          fontWeight={700}
        >
          From the manufacturer
        </Typography>
        <Box
          component="img"
          alt="manufacture"
          src={img}
          sx={{width: "100%"}}
        />
      </ManufactureWrap>
  );
}

Manufacture.propTypes = {
  img: PropTypes.any
};