import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Benefit() {
  return (
    <Box>
      <Stack sx={{ maxWidth: "1000px", px: "15px", mx: "auto", py: 10 }}>
        <Typography variant="h4" component="h4" align="center" fontWeight={600}>Your Go-To Managed IT Services Provider.</Typography>
        <Typography variant="p" component="p" align="center" mt={1}>
          We understand that whether you are a startup business or any size organization, you look for a credible, reliable and trusted IT services provider that can not only help you manage your IT needs seamlessly but assist you afterwards as well.
          <br /><br />
          We as one of the well-recognized managed IT services In Ontario, Hamilton and other cities, understand businesses’ distinct needs and have helped thousands of companies with their IT related cumbersome issues. We have provided businesses with effective solutions including managed IT services, On-site IT services, IT consulting, Cloud services, Network cabling and more.
        </Typography>
      </Stack>
    </Box>
  );
}
