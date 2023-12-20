import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Benefit() {
  return (
      <Box>
        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", my: 5}}>
          <Grid item xs={12} sm={5} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="benefit"
                src="/itsolution/balance-01.svg"
                sx={{
                  width: "200px",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={7} display='flex' alignItems='center' sx={{px: 5}}>
            <Stack sx={{textAlign: "center"}}>
              <Typography variant="h5" component="h5" fontWeight={800}>
                IT strategy consulting (for CIO).
              </Typography>
              <Typography variant="p" component="p" sx={{mt: 8}}>
                Our team creates a strategy that would bring together a diversified IT landscape and make it work towards supporting existing business processes and driving new business initiatives.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", my: 5}}>
          <Grid item xs={12} sm={5} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="cost"
                src="/itsolution/cost-01.svg"
                sx={{
                  width: "200px",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={7} display='flex' alignItems='center' sx={{px: 5}}>
            <Stack sx={{textAlign: "center"}}>
              <Typography variant="h5" component="h5" fontWeight={800}>
                Technology consulting.
              </Typography>
              <Typography variant="p" component="p" sx={{mt: 8}}>
                Our Team analyzes the existing state of the technology area of your interest and assist in its steady evolution to make it play a more prominent role in your business growth.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", my: 5}}>
          <Grid item xs={12} sm={5} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="end-to-end"
                src="/itsolution/end-to-end-01.svg"
                sx={{
                  width: "200px",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={7} display='flex' alignItems='center' sx={{px: 5}}>
            <Stack sx={{textAlign: "center"}}>
              <Typography variant="h5" component="h5" fontWeight={800}>
                Technology consulting.
              </Typography>
              <Typography variant="p" component="p" sx={{mt: 8}}>
                Our Team analyzes the existing state of the technology area of your interest and assist in its steady evolution to make it play a more prominent role in your business growth.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", my: 5}}>
          <Grid item xs={12} sm={5} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="speed"
                src="/itsolution/speed-01.svg"
                sx={{
                  width: "200px",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={7} display='flex' alignItems='center' sx={{px: 5}}>
            <Stack sx={{textAlign: "center"}}>
              <Typography variant="h5" component="h5" fontWeight={800}>
                Technology consulting.
              </Typography>
              <Typography variant="p" component="p" sx={{mt: 8}}>
                Our Team analyzes the existing state of the technology area of your interest and assist in its steady evolution to make it play a more prominent role in your business growth.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
  );
}
