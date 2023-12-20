import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function RoadMap() {
  return (
    <Box sx={{ mt: 5, mb: 20 }}>
      <Typography
        variant="h5"
        component="h5"
        textAlign="center"
        sx={{ mt: 2, px: 5, maxWidth: "450px", mx: "auto", fontSize: "18px", fontWeight: 300 }}
      >
        Long term industry-leading IT professionals envisioned helping you with your IT challenges seamlessly. Genius Tech’s highly effective, flexible and customized IT solutions power the leading brands and businesses globally.      </Typography>
      <Stack sx={{ mt: 2, mx: 2 }}>
        <Typography variant="h4" component="h4" align="center">Now, Is Your Turn to Experience Remarkable IT Solutions.</Typography>
      </Stack>
      <Typography
        variant="p"
        component="p"
        textAlign="center"
        sx={{ mt: 3 }}
      >
        Contact us and let us help you with your unique business needs.
      </Typography>
    </Box>
  );
}
