import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Callus from "./Callus";

import { Link } from "react-router-dom";

export default function OurMission() {
  return (
      <Box>
        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", mt: 10}}>
          <Grid item xs={12} sm={6} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="Move to AWS"
                src="/ourservice/movetoaws.svg"
                sx={{
                  width: "350px",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack>
              <Typography variant="h5" component="h5" fontWeight={600}>
                Exceptional Availability and Stable Scaling are a Must to Stay in the Game.
              </Typography>
              <Typography variant="p" component="p">
                94% of companies already use cloud services reducing IT costs, granting their users reliability and availability and refocusing from routine maintenance to more strategic initiatives.<br/>Let us help you get cloud applications designed for high security, performance efficiency, and operational excellence while ensuring the optimal resource consumption.
              </Typography>
              <Box display='flex' justifyContent='space-around' mt={4}>
                <Link rel="canonical" to="/subscribe" className="text-decoration-none">
                  <Button variant="contained" sx={{px: 5, py: 1}}>Move to the cloue</Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", mt: 10}}>
          <Grid item xs={12} sm={6} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="Migrate to AWS"
                src="/ourservice/migratetoaws.svg"
                sx={{
                  width: "200px",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack>
              <Typography variant="h5" component="h5" fontWeight={600}>
                Just Embarking on the AWS Migration Journey?
              </Typography>
              <Typography variant="p" component="p">
                We can assist you in migrating your workload from the on-premises environment or any other hosting facility to AWS. We use proven methodologies, best practices, and tools to simplify and accelerate migration. Thus, you can unlock business opportunities associated with AWS faster.
              </Typography>
              <Box display='flex' justifyContent='space-around' mt={4}>
                <Link rel="canonical" to="/subscribe" className="text-decoration-none">
                  <Button variant="contained" sx={{px: 5, py: 1}}>Migrate to AWS</Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", mt: 10}}>
          <Grid item xs={12} sm={6}>
            <Stack>
              <Typography variant="h5" component="h5" fontWeight={600}>
                Just Embarking on the Azure Migration Journey?
              </Typography>
              <Typography variant="p" component="p">
                Genius Tech take over your AWS-based IT infrastructure management. We apply our expertise to keep your AWS services and applications stable, expenses optimized, and required changes implemented promptly.
              </Typography>
              <Box display='flex' justifyContent='space-around' mt={4}>
                <Link rel="canonical" to="/subscribe" className="text-decoration-none">
                  <Button variant="contained" sx={{px: 5, py: 1}}>Migrate to Azure</Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="Migrate to Azure"
                src="/ourservice/migratetoazure.svg"
                sx={{
                  width: "200px",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Callus
          title='Access your data from anywhere, anytime .'
        />

        <Stack sx={{mt: 10, mx: 2}}>
          <Typography variant="h4" component="h4" align="center">Your Perfect Backup Solution!</Typography>
        </Stack>

        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", mt: 10}}>
          <Grid item xs={12} sm={6}>
            <Stack>
              <Box
                component="img"
                alt="Cloud Backup Solution Workstation"
                src="/ourservice/5fff3c833949e-1920w.webp"
                sx={{
                  width: "350px",
                  height: "350px",
                  my: {xs: 5, sm: 0}
                }}
              />
              <Typography variant="h5" component="h5" fontWeight={600}>
                Cloud Backup Solution Workstation.
              </Typography>
              <Box display='flex' justifyContent='space-around' mt={4}>
                <Link rel="canonical" to="/cloud-backup-solution-workstation" className="text-decoration-none">
                  <Button variant="contained" sx={{px: 5, py: 1}}>Know More</Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="Cloud Backup Solution Server"
                src="/ourservice/server+management-1920w.webp"
                sx={{
                  width: "350px",
                  height: "350px",
                  my: {xs: 5, sm: 0}
                }}
              />
              <Typography variant="h5" component="h5" fontWeight={600}>
                Cloud Backup Solution Server.
              </Typography>
              <Box display='flex' justifyContent='space-around' mt={4}>
                <Link rel="canonical" to="/cloud-backup-solution-server" className="text-decoration-none">
                  <Button variant="contained" sx={{px: 5, py: 1}}>Know More</Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", mt: 10}}>
          <Grid item xs={12} sm={6} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="Paas"
                src="/ourservice/Paas.svg"
                sx={{
                  width: "200px",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack>
              <Typography variant="h5" component="h5" fontWeight={600} align='center'>
                PaaS.
              </Typography>
              <Typography variant="p" component="p" align='center'>
                By choosing Platform as a Service (PaaS), besides cloud storage and other resources, like operating systems, you get ready-to-use tools for developing, configuring, customizing, testing, and managing your applications. Such tools can be, for instance, database, application integration, or AI services.<br/>The PaaS model is popular with companies as it cuts the coding time, reduces time to market, and the overall software development expenses.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", mt: 10}}>
          <Grid item xs={12} sm={6}>
            <Stack>
              <Typography variant="h5" component="h5" fontWeight={600} align='center'>
                SaaS.
              </Typography>
              <Typography variant="p" component="p" align='center'>
                In the SaaS (Software as a Service) model, software is used on a subscription basis and centrally hosted in the public cloud. The companies don’t need to build anything from scratch but can find a pre-built solution that can be configured and customized to meet their needs fully.<br/>SaaS solutions cover a wide variety of business needs, such as marketing, accounting, sales, HR, and etc. Popular examples of SaaS products are Salesforce, Microsoft Dynamics 365 Online, and Office 365.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="Saas"
                src="/ourservice/Saas.svg"
                sx={{
                  width: "200px",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", mt: 10}}>
          <Grid item xs={12} sm={6} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="Iaas"
                src="/ourservice/Iaas.png"
                sx={{
                  width: "200px",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack>
              <Typography variant="h5" component="h5" fontWeight={600} align='center'>
                IaaS.
              </Typography>
              <Typography variant="p" component="p" align='center'>
                Infrastructure as a service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet. IaaS is one of the three main categories of cloud computing services, alongside software as a service (SaaS) and platform as a service (PaaS).
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Stack sx={{mt: 10, mx: 2}}>
          <Typography variant="h2" component="h2" fontWeight={600} align="center">We offer.</Typography>
        </Stack>
        <Grid container sx={{maxWidth: "1000px", px: 5, mx: "auto", mt: 10}}>
          <Grid item xs={12} sm={3} sx={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <Stack>
              <Box
                component="img"
                alt="Our Services"
                src="/ourservice/item1.webp"
                sx={{
                  width: "200px",
                  height: "100px",
                  border: "1px solid gray",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Stack>
              <Box
                component="img"
                alt="Our Services"
                src="/ourservice/item2.webp"
                sx={{
                  width: "200px",
                  height: "100px",
                  border: "1px solid gray",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Stack>
              <Box
                component="img"
                alt="Our Services"
                src="/ourservice/item3.png"
                sx={{
                  width: "200px",
                  height: "100px",
                  border: "1px solid gray",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Stack>
              <Box
                component="img"
                alt="Our Services"
                src="/ourservice/item4.png"
                sx={{
                  width: "200px",
                  height: "100px",
                  border: "1px solid gray",
                  my: {xs: 5, sm: 0}
                }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Stack sx={{maxWidth: "900px", px: 5, mx: "auto", mt: 2}} display='flex' direction='row' justifyContent='space-between'>
          <Typography variant="h4" component="h4" align="center" sx={{width: "fit-content"}}>Hosted App</Typography>
          <Typography variant="h4" component="h4" align="center" sx={{width: "fit-content"}}>Hosted Email</Typography>
          <Typography variant="h4" component="h4" align="center" sx={{width: "fit-content"}}>Virtual Private Cloud</Typography>
        </Stack>
      </Box>
  );
}
