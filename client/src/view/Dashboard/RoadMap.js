import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function RoadMap() {
  return (
    <Box sx={{ mt: 10, mb: 40 }}>
      <Typography
        variant="h3"
        component="h3"
        textAlign="center"
        sx={{ fontSize: "2.5rem" }}
      >
        Genius Tech Will Help Your Business Prosper and Succeed
      </Typography>
      <Typography
        variant="p"
        component="p"
        textAlign="center"
        sx={{ mt: 5, px: 5, maxWidth: "900px", mx: "auto" }}
      >
        Genius Tech provides IT support and services that ensure minimize costs and maximize productivity, save time and efforts and boost business growth eventually. With a result-driven combination of expertise, vast industry experience, innovation and constructive tech approaches we deliver the right solutions to fix businesses’ tech issues. Contact us now for any of your queries.      </Typography>
    </Box>
  );
}
