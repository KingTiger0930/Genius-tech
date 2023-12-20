import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const ProgressWrap = styled(Box)(() => ({
  height: "20px",
  width: "160px",
  backgroundColor: "#F0F2F2",
  border: "1px solid #ddd",
  borderRadius: "3px"
}));

export default function ProgressBar({title, percent}) {
  return (
    <Stack direction='row' alignItems='center' sx={{width: "60%", mt: 1}} justifyContent='space-between'>
      <Typography
        variant="p"
        component="p"
        color='#007185'
        sx={{width: "80px"}}
      >
        {title}
      </Typography>
      <ProgressWrap>
        <Box sx={{backgroundColor: "#FFA41C", width: percent+"%", height: "18px", border: "1px solid #de7921", borderRadius: "3px"}}>
        </Box>
      </ProgressWrap>
      <Typography
        variant="p"
        component="p"
        color='#007185'
        sx={{width: "80px"}}
        align='right'
      >
        {percent}%
      </Typography>
    </Stack>
  );
}

ProgressBar.propTypes = {
  title: PropTypes.any,
  percent: PropTypes.any,
};
