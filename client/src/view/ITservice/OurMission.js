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
      <Stack sx={{ mt: 4, mx: 2 }}>
        <Typography variant="h3" component="h3" align="center">Get Ready for an Exceptional IT Support Experience.</Typography>
      </Stack>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Stack>
            <Box
              component="img"
              alt="our-mission"
              src="/itservice/desktop.svg"
              sx={{
                width: "350px",
                my: { xs: 5, sm: 0 }
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} display='flex' alignItems='center' sx={{ px: 5 }}>
          <Stack sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5">
              Desktop Management.
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 2 }}>
              Desktop Management solution is made up of effective software tools, to help end-users eliminate time, manage costs and boost productivity effortlessly.
              <br/><br/>
              Workstation backup<br />
              Workstation Security <br />
              Managed workstation <br />
              Workstation monitoring <br />
              Workstation update and patching<br />
            </Typography>
            <Box display='flex' justifyContent='space-around' mt={4}>
              <Link rel="canonical" to="/desktop-management-and-remote-support-service" className="text-decoration-none">
                <Button variant="contained" sx={{ px: 5, py: 1 }}>Workstation/Desktop<br />Management and Remote<br />Support</Button>
              </Link>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Stack>
            <Box
              component="img"
              alt="support"
              src="/itservice/sharing.svg"
              sx={{
                width: "350px",
                my: { xs: 5, sm: 0 }
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} display='flex' alignItems='center' sx={{ px: 5 }}>
          <Stack sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5">
              Network Management .
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 2 }}>
              Network Management functions span several areas including network operation, network
              <br/><br/>
              Network backup <br />
              Managed network <br />
              Network security <br />
              Network monitoring <br />
              Network firmware update <br />
            </Typography>
            <Box display='flex' justifyContent='space-around' mt={4}>
              <Link rel="canonical" to="/network-management" className="text-decoration-none">
                <Button variant="contained" sx={{ width: "220px", py: 1 }}>Network Management</Button>
              </Link>
            </Box>
            <Box display='flex' justifyContent='space-around' mt={1}>
              <Link rel="canonical" to="/network-cabling" className="text-decoration-none">
                <Button variant="contained" sx={{ width: "220px", py: 1 }}>Network Cabling</Button>
              </Link>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Grid container sx={{ maxWidth: "1000px", px: 5, mx: "auto", mt: 10 }}>
        <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Stack>
            <Box
              component="img"
              alt="could server"
              src="/itservice/004-cloud-server.svg"
              sx={{
                width: "350px",
                my: { xs: 5, sm: 0 }
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} display='flex' alignItems='center' sx={{ px: 5 }}>
          <Stack sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5">
              Server Management .
            </Typography>
            <Typography variant="p" component="p" sx={{ mt: 2 }}>
              Server management is highly effective for getting access to a virtual, physical or application server in order to perform several types of administrative or maintenance operations. It also includes server monitoring to make sure the server is operating rightly to improve performance.
              <br/><br/>
              Server Security <br />

              Server backup <br />

              Managed server <br />

              Server monitoring <br />

              Server update and patching <br />
            </Typography>
            <Box display='flex' justifyContent='space-around' mt={4}>
              <Link rel="canonical" to="/server-management" className="text-decoration-none">
                <Button variant="contained" sx={{ width: "220px", py: 1 }}>Server Management</Button>
              </Link>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
