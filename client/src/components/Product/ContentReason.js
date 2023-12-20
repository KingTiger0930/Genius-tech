import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import "./../../assets/style.css";

export default function ContentReason({title, subtitle1, subtitle2, value}) {
  return (
      <Box sx={{maxWidth: "1000px", mx: "auto"}}>
        <Typography variant="h5" component="h5" fontWeight={600} color='#003187' sx={{mt: 10}}>
          {title}
        </Typography>
        <Typography variant="p" component="p" sx={{mt: 2, fontSize: "20px"}}>
          {subtitle1}
        </Typography>
        <Typography variant="p" component="p" sx={{mt: 2, fontSize: "20px"}}>
          {subtitle2}
        </Typography>
        <Grid container sx={{mb: 10}}>
          <Grid item xs={12}>
            {
              typeof value[0] == "object" ?
                value.map((item, i) => (
                  <div key={i}>
                    <Typography variant='p' component='p' fontWeight={600} color='#003187'>{(i+1) + ". " + item.title}</Typography>
                    <Typography variant='p' component='p'>{item.subtitle}</Typography>
                    <ul className=".ContentReason_1">
                      {
                        item.list.map((subitem, i) => (
                          <li key={i}>{subitem}</li>
                        ))
                      }
                    </ul>
                  </div>
                ))
              : (
                <ul className=".ContentReason_2">
                  {
                    value.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))
                  }
                </ul>
              )
            }
          </Grid>
        </Grid>
      </Box>
  );
}

ContentReason.propTypes = {
  title: PropTypes.any,
  subtitle1: PropTypes.any,
  subtitle2: PropTypes.any,
  value: PropTypes.any
};