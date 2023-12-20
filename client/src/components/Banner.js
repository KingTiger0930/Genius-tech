import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

export default function Banner({img}) {
  return (
      <>
        <Grid sx={{mt: "95px"}} display='flex' justifyContent='center'>
          <Box
            component="img"
            alt="Genius Tech"
            src={img}
            sx={{
              width: "100%",
              maxWidth: "1500px"
            }}
          />
        </Grid>
      </>
  );
}

Banner.propTypes = {
  img: PropTypes.any
};