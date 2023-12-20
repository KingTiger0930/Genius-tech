import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

import { Link } from "react-router-dom";

const ReviewMentionWrap = styled(Box)(() => ({
  width: "60%",
  marginTop: "20px"
}));

const Tag = styled(Link)(() => ({
  borderBottom: "solid 1px #969696",
  backgroundColor: "#D7E8EA",
  padding: "8px 14px",
  margin: "0px 10px 14px 0px",
  fontSize: "13px",
  color: "#111111",
  width: "fit-content",
  textDecoration: "none",
  display: "inline-block",
  lineHeight: 1
}));

export default function ReviewMention() {
  return (
    <ReviewMentionWrap>
      <Typography
        variant="p"
        component="p"
        sx={{mb: 2, fontSize: "20px"}}
        color='#000'
        fontWeight={700}
      >
        Read reviews that mention
      </Typography>
      
      <Box>
        <Tag to='/'>power strip</Tag>
        <Tag to='/'>surge protector</Tag>
        <Tag to='/'>bright green</Tag>
        <Tag to='/'>entertainment center</Tag>
        <Tag to='/'>green red</Tag>
        <Tag to='/'>well made</Tag>
        <Tag to='/'>great value</Tag>
        <Tag to='/'>heavy duty</Tag>
        <Tag to='/'>surge protection</Tag>
        <Tag to='/'>night light</Tag>
        <Tag to='/'>green lights</Tag>
        <Tag to='/'>electrical tape</Tag>
        <Tag to='/'>card length</Tag>
      </Box>
    </ReviewMentionWrap>
  );
}
