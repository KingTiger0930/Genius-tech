import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function OurMission() {
  return (
    <Box>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Stack>
            <Box
              component="img"
              alt="our-mission"
              src="/about-us/ourmission.svg"
              sx={{
                width: "350px",
                my: { xs: 5, sm: 0 }
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="h3" component="h3">
              Our Mission .
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 3 }}>
              Genius Tech lessens the complexity of navigating a persistently evolving IT landscape. With many years of experience, a deep bench of technology experts and groundbreaking software, we envisioned helping you achieve your business objectives. We enable businesses to access integrated customized IT solutions the way never before. Our customer-oriented model enables that we prioritize our customers first offering an incorporated Tech portfolio, consulting-led approaches and a multitude of optimization that encompass the entire Enterprise value chain.

              Hiring our Managed IT solutions, you will enjoy tailored IT solutions, managed support and service as well as will benefit from our team’s vast industry experience, monitoring tools and robust technology. Whether this is to enhance productivity, reduce costs, boost efficiency or maximize growth – Genius Tech is you can count on! So, why wait anymore? Contact us today and let us help you like never before.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="h3" component="h3">
              Let’s Grow Together – Our Vision!
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 3 }}>
              What kept us succeeding is our success built on trust and love we earned from our loyal clients. We envisioned remaining with our clients from the very beginning to the end making them our loyal customers – solving complex and complicated challenges in ways that help minimize risks and maximize benefits eventually.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Stack>
            <Box
              component="img"
              alt="our-drive"
              src="/about-us/ourdrive.svg"
              sx={{
                width: "350px",
                my: { xs: 5, sm: 0 }
              }}
            />
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10, mb: 4 }}>
        <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Stack>
            <Box
              component="img"
              alt="about us"
              src="/about-us/goal.svg"
              sx={{
                height: "350px",
                mb: { xs: 5, sm: 0 }
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Stack>
            <Typography variant="h3" component="h3">
              Core Goal .
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 3 }}>
              We vigorously ensure consider ethical principles and policies – set by the company, to be adhered to. Hence, our “ethics program” aimed to create and raise awareness among employees about working in accordance with designed ethics that act as a guiding force – enabling our workers to perform well and make sound decisions based on transparency, integrity and honesty. In addition, our compliance program is focused more on ensuring that both the internal and external regulations are fully adhered to by every employee in the company.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
