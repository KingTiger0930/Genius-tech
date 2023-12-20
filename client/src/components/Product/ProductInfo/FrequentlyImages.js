import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

import "./../../../assets/style.css";

export default function FrequentlyImages({products}) {
  return (
    <Stack direction='row' alignItems='center'>
      {
        products.map((item, i) => (
          <Stack key={i} direction='row' alignItems='center'>
            <Box
              component="img"
              alt="frequently images"
              title="frequently images tooltip"
              src={item.url}
              sx={{
                width: "60px",
              }}
            />
            { i !== products.length - 1 && (
              <Typography
                variant="h4"
                component="h4"
                sx={{mx: 1}}
              >
                +
              </Typography>
            ) }
          </Stack>
        ))
      }
      <Stack direction='column' justifyContent='space-around' alignItems='center'>
        <Typography
          variant="p"
          component="p"
          sx={{mx: 1}}
        >
          Total price: <span className="FrequentlyImages">${products.reduce(function(sum, item){
            return sum + item.price;
          }, 0).toFixed(2)}</span>
        </Typography>
        <Button variant='outlined' sx={{mt: 1, height: "22px", width: "110px", fontSize:"11px", borderRadius: "15px", backgroundColor: "#FFD814", color: "#000"}}>Add to Cart</Button>
      </Stack>
    </Stack>
  );
}

FrequentlyImages.propTypes = {
  products: PropTypes.any,
};