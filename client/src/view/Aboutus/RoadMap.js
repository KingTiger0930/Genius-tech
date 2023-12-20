import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function RoadMap() {
  return (
    <Box sx={{ mt: 5, mb: 20 }}>
      <Stack sx={{ mt: 4, mx: 2 }}>
        <Typography variant="h3" component="h3" align="center">ABOUT US .</Typography>
      </Stack>
      <Typography
        variant="h4"
        component="h4"
        textAlign="center"
        sx={{ mt: 3 }}
      >
        Trusted IT Solutions
      </Typography>
      <Typography
        variant="p"
        component="p"
        textAlign="center"
        sx={{ mt: 2, px: 5, maxWidth: "900px", mx: "auto" }}
      >
        Genius Tech – more than just the traditional break-fix IT service, is offering a wide range of customized IT solutions to support your business`s IT infrastructure. From applications to hardware to networking, our team of highly dedicated IT experts will help manage, monitor and maintain your IT environment as well as detect issues and areas that required optimization to ensure long term business resilience.      </Typography>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={6} sm={3}>
          <Stack alignItems='center'>
            <Box
              component="img"
              alt="about us"
              src="/about-us/about1.svg"
              sx={{
                width: "100px",
                my: { xs: 5, sm: 0 }
              }}
            />
            <Typography variant="h5" component="h5" align='center' sx={{ mt: 2 }}>
              Integrated Approaches
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 2 }}>
              Industry-leading innovative approaches and tailored IT solutions to transform your business exceptionally.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3} sx={{ px: 1 }}>
          <Stack alignItems='center'>
            <Box
              component="img"
              alt="about us"
              src="/about-us/about2.svg"
              sx={{
                width: "100px",
                my: { xs: 5, sm: 0 }
              }}
            />
            <Typography variant="h5" component="h5" align='center' sx={{ mt: 2 }}>
              Guaranteed Customer Satisfaction
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 2 }}>
              We believe in the notion that “we grow when our customers grow”. Hence, we partner with you to remain at your side in your goods and bad ensuring higher customer satisfaction.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3} sx={{ px: 1 }}>
          <Stack alignItems='center'>
            <Box
              component="img"
              alt="about us"
              src="/about-us/about3.svg"
              sx={{
                width: "100px",
                my: { xs: 5, sm: 0 }
              }}
            />
            <Typography variant="h5" component="h5" align='center' sx={{ mt: 2 }}>
              Pro Support
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 2 }}>
              Genius Tech as the name implies, is a Pro that you can rely on for the maintenance and operation of your business applications and needs.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3} sx={{ px: 1 }}>
          <Stack alignItems='center'>
            <Box
              component="img"
              alt="about us"
              src="/about-us/about4.svg"
              sx={{
                width: "100px",
                my: { xs: 5, sm: 0 }
              }}
            />
            <Typography variant="h5" component="h5" align='center' sx={{ mt: 2 }}>
              Utmost Security
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 2 }}>
              We prioritised “security” as our core vision – thus, envisioned managing your IT issues ensuring complete and utmost security.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
