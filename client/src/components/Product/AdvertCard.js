import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";

export default function AdvertCard({product, selectedItem}) {
  return (
    <Box
      sx={{
        border: "1px solid #CCC",
        borderRadius: "8px",
        padding: 1,
        mt: 2
      }}
    >
      <Stack direction='row'>
        <Box
          component="img"
          alt="product card"
          title="product card tooltip"
          src={product.images[0].url}
          sx={{
            width: "50%",
            my: {xs: 5, sm: 0}
          }}
        />
        <Stack>
          <Box
            component="img"
            alt="product card"
            src="/product/apc.jpg"
            sx={{
              width: "100%",
              my: {xs: 5, sm: 0}
            }}
          />
          <Typography
            variant="p"
            component="p"
            sx={{mt: 1, fontSize: "14px", fontStyle: "italic"}}
            color='#333'
            align='center'
          >
            {product.name}
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Typography
          variant="p"
          component="p"
          sx={{
            mt: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordWrap: "break-word",
            whiteSpace: "nowrap"
          }}
        >
          {product.description}
        </Typography>
        <Stack direction='row' sx={{mt: 1}} alignItems='center' justifyContent='space-between'>
          <Box>
            <Rating
              name="simple-controlled"
              size="small"
              readOnly
              value={product.rating}
              precision={0.5}
            />
            <Typography
              variant="p"
              component="p"
            >
              ${selectedItem ? selectedItem.price : 0}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

AdvertCard.propTypes = {
  product: PropTypes.any,
  selectedItem: PropTypes.any
};