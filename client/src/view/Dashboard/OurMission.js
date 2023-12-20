import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

export default function OurMission() {
  return (
    <Box>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="h4" component="h4" fontWeight={800}>
              We don’t rush into providing services. Rather, we take time to recognize the core of the issue and then provide the best possible solution.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="p" component="p">
              We believe in the notion that “we grow when our clients grow”. Therefore, we offer the industry’s widest tech portfolio of data security, cloud services, applications and infrastructure services to our clients.  We have a team of highly professional and experienced IT experts who have years of expertise under their belt – dedicated to providing transparent and reliable IT services to meet your distinct needs.            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Box
              component="img"
              alt="growth"
              src="/home/growth.svg"
              sx={{
                height: "250px",
                width: "fit-content"
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="h5" component="h5" fontWeight={800}>
              Success Is No More a Dream Now!
            </Typography>
            <Typography variant="p" component="p">
              Does your business lack the resources and expertise in IT and software? We will help you maximize your business potential and growth eventually.
              See here what we have offered to our clients.

            </Typography>
            <Box display='flex' mt={4}>
              <Button variant="contained" sx={{ px: 5, py: 1 }}>View Portfolio</Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="h5" component="h5" fontWeight={800}>
              24/7 Help Desk
            </Typography>
            <Typography variant="p" component="p">
              Genius Tech is here to bridge the gap in the industry. We provide both remote and on-site IT services to businesses around the clock.
              Get in touch with us and let us help you meet your needs.

            </Typography>
            <Box display='flex' mt={4}>
              <Link rel="canonical" to="/subscribe" className="text-decoration-none">
                <Button variant="contained" sx={{ px: 5, py: 1 }}>Contact Us Today</Button>
              </Link>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Box
              component="img"
              alt="clock-home"
              src="/home/clock-home.svg"
              sx={{
                height: "250px",
                width: "fit-content"
              }}
            />
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Box
              component="img"
              alt="no-extra-fees"
              src="/home/no+extra+fees.svg"
              sx={{
                height: "250px",
                width: "fit-content"
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="h5" component="h5" fontWeight={800}>
              No Hidden Costs
            </Typography>
            <Typography variant="p" component="p">
              Planning your budget is easy with Genius Tech. We make sure our pricing is fair and transparent. With our monthly subscriptions, you can have peace of mind as you don’t have to think about any hidden fees or surprise costs.
              Take a look at our fair pricing plans.

            </Typography>
            <Box display='flex' mt={4}>
              <Link rel="canonical" to="/subscribe" className="text-decoration-none">
                <Button variant="contained" sx={{ px: 5, py: 1 }}>View Pricing</Button>
              </Link>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={12} sm={6}>
          <Stack sx={{ p: 2 }}>
            <Box
              component="img"
              alt="IT consulting"
              src="/home/it+consulting-fa42b547.svg"
              sx={{
                height: "400px",
                width: "fit-content"
              }}
            />
            <Typography variant="h5" component="h5" align='center' fontWeight={800} sx={{ mt: 2 }}>
              IT Consulting
            </Typography>
            <Typography variant="p" component="p" align='center' sx={{ height: "100px" }}>
            Our dedicated team of IT experts In Ontario and across the globe will help answer your questions, fix issues, find the best tech solution and keep your business running smoothly.
            </Typography>
            <Box display='flex' justifyContent='space-around' mt={4}>
              <Link rel="canonical" to="/our-it-solutions" className="text-decoration-none">
                <Button variant="contained" sx={{ px: 5, py: 1 }}>More Info</Button>
              </Link>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack sx={{ p: 2 }}>
            <Box
              component="img"
              alt="Managed IT Services"
              src="/home/managed+it+services.svg"
              sx={{
                height: "400px",
                width: "fit-content"
              }}
            />
            <Typography variant="h5" component="h5" align='center' fontWeight={800} sx={{ mt: 2 }}>
              Managed IT Services
            </Typography>
            <Typography variant="p" component="p" align='center' sx={{ height: "100px" }}>
            There can be various areas of your business that need to be fixed. We will help you take full advantage of the Managed IT services in Ontario, Canada and worldwide to help you protect your business from cyber-attacks.
            </Typography>
            <Box display='flex' justifyContent='space-around' mt={4}>
              <Link rel="canonical" to="/managed-it-services" className="text-decoration-none">
                <Button variant="contained" sx={{ px: 5, py: 1 }}>More Info</Button>
              </Link>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={12} sm={6}>
          <Stack sx={{ p: 2 }}>
            <Box
              component="img"
              alt="OnSite Services"
              src="/home/onsite+it+services+2.svg"
              sx={{
                height: "400px",
                width: "fit-content"
              }}
            />
            <Typography variant="h5" component="h5" align='center' fontWeight={800} sx={{ mt: 2 }}>
              On-Site IT Services.
            </Typography>
            <Typography variant="p" component="p" align='center' sx={{ height: "100px" }}>
              Genius Tech helps businesses with a wide array of IT services including Managed IT services, Support packages, Ad-hoc, Technical assistance, On-call services to help you fix your IT issues and accomplish your goals.
            </Typography>
            <Box display='flex' justifyContent='space-around' mt={4}>
              <Link rel="canonical" to="/onsite-it-support-services" className="text-decoration-none">
                <Button variant="contained" sx={{ px: 5, py: 1 }}>More Info</Button>
              </Link>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack sx={{ p: 2 }}>
            <Box
              component="img"
              alt="Cloud Services"
              src="/home/cloud+services+1.svg"
              sx={{
                height: "400px",
                width: "fit-content"
              }}
            />
            <Typography variant="h5" component="h5" align='center' fontWeight={800} sx={{ mt: 2 }}>
              Cloud Services.
            </Typography>
            <Typography variant="p" component="p" align='center' sx={{ height: "100px" }}>
              Genius Tech offers managed cloud computing services including cloud deployment, network and storage, cloud security, cloud monitoring and reporting, IT infrastructure setup, backup and
              recovery and cloud migration services.
            </Typography>
            <Box display='flex' justifyContent='space-around' mt={4}>
              <Link rel="canonical" to="/our-services" className="text-decoration-none">
                <Button variant="contained" sx={{ px: 5, py: 1 }}>More Info</Button>
              </Link>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
