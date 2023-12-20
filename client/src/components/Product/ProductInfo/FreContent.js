import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import "./../../../assets/style.css";

export default function FreContent({title, subtitle, value}) {
  return (
      <Box sx={{px: 2}}>
        <Typography variant="h5" component="h5" fontWeight={600} color="#003187">
          {title}
        </Typography>
        <Typography variant="p" component="p" fontWeight={600} sx={{mt: 2}}>
          {subtitle}
        </Typography>
        <ul>
          {
            typeof value[0] == "object" ?
              value.map((item, i) => (
                <div key={i}>
                  <Typography variant='p' component='p' fontWeight={600} color='#003187'>{(i+1) + ". " + item.title}</Typography>
                  <Typography variant='p' component='p'>{item.subtitle}</Typography>
                  <ul className="FrenContent_1">
                    {
                      item.list.map((subitem, i) => (
                        <li key={i}>{subitem}</li>
                      ))
                    }
                  </ul>
                </div>
              ))
            : (
              <ul className="FrenContent_2">
                {
                  value.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))
                }
              </ul>
            )
          }
        </ul>
      </Box>
  );
}

FreContent.propTypes = {
  title: PropTypes.any,
  subtitle: PropTypes.any,
  value: PropTypes.any,
};