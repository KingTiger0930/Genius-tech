import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function Banner({title, price}) {
  return (
      <>
        <Grid sx={{mt: "135px", maxWidth: "900px", mx: "auto"}}>
          <Typography variant="h3" component="h3" align="center" fontWeight={600}>{title}</Typography>
          <Typography variant="h5" component="h5" align="center">{price}</Typography>
        </Grid>
      </>
    );
}

Banner.propTypes = {
  title: PropTypes.any,
  price: PropTypes.any
};
