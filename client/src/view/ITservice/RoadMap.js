import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function RoadMap() {
  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Typography
        variant="h3"
        component="h3"
        textAlign="center"
      >
        Let Us Become Part of your Team.
      </Typography>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={6} sm={3}>
          <Stack alignItems='center'>
            <Box
              component="img"
              alt="road map"
              src="/itservice/item1.svg"
              sx={{
                width: "100px",
                my: { xs: 5, sm: 0 }
              }}
            />
            <Typography variant="p" component="p" textAlign="center" sx={{ mt: 2 }}>
              Systems and services are monitored 24/7 to ensure a quick response to any of your issues and help satisfy your queries seamlessly
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3} sx={{ px: 1 }}>
          <Stack alignItems='center'>
            <Box
              component="img"
              alt="road map"
              src="/itservice/item2.svg"
              sx={{
                width: "100px",
                my: { xs: 5, sm: 0 }
              }}
            />
            <Typography variant="p" component="p" textAlign="center" sx={{ mt: 2 }}>
              Regular and constant analysis and reporting provides insights into your environment and enables planning for the future.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3} sx={{ px: 1 }}>
          <Stack alignItems='center'>
            <Box
              component="img"
              alt="road map"
              src="/itservice/item3.svg"
              sx={{
                width: "100px",
                my: { xs: 5, sm: 0 }
              }}
            />
            <Typography variant="p" component="p" textAlign="center" sx={{ mt: 2 }}>
              Industry-leading IT solutions provider that hundreds of organizations have worked with and became our loyal customers eventually.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3} sx={{ px: 1 }}>
          <Stack alignItems='center'>
            <Box
              component="img"
              alt="road map"
              src="/itservice/item4.svg"
              sx={{
                width: "100px",
                my: { xs: 5, sm: 0 }
              }}
            />
            <Typography variant="p" component="p" textAlign="center" sx={{ mt: 2 }}>
              A partner with inclusive IT solutions, flexibility and industry expertise to help you accelerate and grow exceptionally.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Box display='flex' justifyContent='space-around' mt={4}>
        <Link rel="canonical" to="/subscribe" className="text-decoration-none">
          <Button variant="contained" sx={{ px: 5, py: 1 }}>Book Managed IT Services</Button>
        </Link>
      </Box>
    </Box>
  );
}
