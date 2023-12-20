import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BannerWrap = styled(Box)(() => ({
  width: "100%",
  marginTop: "95px",
  position: "relative",
}));

const BannerTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  position: "absolute",
  fontWeight: 600,
  textAlign: "center",
  top: "calc(50% - 28px)",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem"
  },
}));

export default function Banner() {
  return (
    <>
      <BannerWrap>
        <BannerTitle variant="h3" component="h3">
          Get In Touch !
        </BannerTitle>
         <Box
          component="img"
          alt="banner"
          src="/contact/banner.webp"
          sx={{
            width: "100%",
          }}
        />
      </BannerWrap>
    </>
  );
}
