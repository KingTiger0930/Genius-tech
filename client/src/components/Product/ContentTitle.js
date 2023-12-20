import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function ContentTitle({title, subtitle}) {
  return (
    <>
      <Grid sx={{mt: "135px", maxWidth: "1400px", mx: "auto"}}>
        <Typography variant="h3" component="h3" align="center" color="#57257d" fontWeight={600}>{title}</Typography>
        <Typography variant="h4" component="h4" align="center">{subtitle}</Typography>
      </Grid>
    </>
  );
}

ContentTitle.propTypes = {
  title: PropTypes.any,
  subtitle: PropTypes.any
};
