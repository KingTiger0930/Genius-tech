import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

export default function Bottom() {
  return (
    <Box backgroundColor='#262d4a' color='white' sx={{ px: 5, py: 10 }}>
      <Grid container sx={{ maxWidth: "1400px", px: 5, mx: "auto" }}>
        <Grid item xs={12} sm={6}>
          <Stack sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5" fontWeight={800}>
              Managed Services To Help You Save Your Time and Money and Boost Business Growth.
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 5 }}>
              Do you want to break free from tech issues and concentrate entirely on growing your business? doesn’t matter whether your business operates in Durham, Hamilton or in Toronto. Managed IT service company like Genius Tech can help you minimize your tech complications, strengthen your IT infrastructure and boost your business growth.<br/><br/>
              No problem is a problem for us! We have highly professional and dedicated Application and Network Support and managed IT services providers. In Durham, Canada and across the globe we are valued for our exceptional IT services.<br/><br/>
              A few of our managed IT services include troubleshooting with network problems, internet connection, application issues and more.<br/><br/>
              Having vast industry experience we help businesses with our managed IT services in Peel, Toronto and other spots around Canada providing them ease of mind.</Typography>
            <Box display='flex' mt={4}>
              <Link rel="canonical" to="/subscribe" className="text-decoration-none">
                <Button variant="contained" sx={{ px: 5, py: 1 }}>Book Service</Button>
              </Link>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Box
              component="img"
              alt="inter"
              src="/itservice/inter.svg"
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
