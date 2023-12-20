import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

import "./../../assets/style.css";

const WarningWrap = styled(Box)(() => ({
  maxWidth: "1400px",
  border: "1px solid #CCC",
  borderRadius: 10,
  margin: "40px auto",
  marginBottom: 0
}));

export default function Warning({message}) {
  return (
      <WarningWrap>
        <Typography
          variant="p"
          component="p"
          sx={{p: 2}}
        >
          <span className="Warning">Warning:</span> {message}
        </Typography>
      </WarningWrap>
  );
}

Warning.propTypes = {
  message: PropTypes.any
};