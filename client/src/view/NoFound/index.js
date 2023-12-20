import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function NoFound() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>404</title>
      </Helmet>
      <Stack sx={{mt: 10, mb: 10, display: "flex", justifyContent: "center", width: "100%" }}>
        <Box sx={{ textAlign: "center" }}>
          <Box
              component="img"
              alt="No Found Page"
              src="404.jpg"
              sx={{
                width: "90%",
                maxWidth: "700px",
                mt: 5
              }}
            />
          <Box display='flex' justifyContent='space-around' mt={4}>
            <Link rel="canonical" to="/" className="text-decoration-none">
              <Button variant="contained" sx={{px: 5, py: 1}}>Go To Home</Button>
            </Link>
          </Box>
        </Box>
      </Stack>
    </HelmetProvider>
    
  );
}
