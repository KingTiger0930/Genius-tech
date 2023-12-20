import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

export default function FindOut() {
  return (
      <Stack sx={{mt: 4, mx: 2}}>
        <Typography variant="h4" component="h4" align="center" fontWeight={600}>MANAGED CLOUD COMPUTING SERVICES .</Typography>
        <Typography variant="p" component="p" align="center" sx={{maxWidth: "950px", mx: "auto", mt:4}}>Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction. This cloud model is composed of five essential characteristics, three service models, and four deployment models.</Typography>
        <Typography variant="h4" component="h4" align="center" fontWeight={600} sx={{mt: 10}}>What are Managed Cloud Computing Services?</Typography>
        <Typography variant="h4" component="h4" align="center" sx={{maxWidth: "1000px", mx: "auto"}}>Custom cloud solutions. Powerful results. Many industries.</Typography>
        <Box display='flex' justifyContent='space-around' mt={4}>
          <Link rel="canonical" to="/subscribe" className="text-decoration-none">
            <Button variant="contained" sx={{px: 5, py: 1}}>Find Out</Button>
          </Link>
        </Box>
      </Stack>
  );
}
