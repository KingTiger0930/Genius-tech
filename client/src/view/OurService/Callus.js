import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function InfoBar({title, content}) {
  return (
      <Stack sx={{mt: 10, mx: 2}}>
        <Typography variant="h4" component="h4" align="center">{title}</Typography>
        <Typography variant="p" component="p" align="center" sx={{maxWidth: "800px", mx: "auto"}} mt={1}>{content}</Typography>
      </Stack>
  );
}

InfoBar.propTypes = {
  title: PropTypes.any,
  content: PropTypes.any
};