import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const ProductImageWrap = styled(Stack)(() => ({
}));

export default function ProductImage({images}) {
  const [main, setMain] = React.useState("");

  React.useEffect(() => {
    setMain(images[0]);
  }, [images]);

  return (
    <ProductImageWrap direction='row'>
      <Stack>
        {
          images.map((item, i) => (
            <Box
              key={i}
              component="img"
              src={item.url}
              alt={item.alt}
              title="product image title"
              sx={{
                width: "40px",
                border: "1px solid #bbb",
                mb: 1
              }}
              onMouseEnter={() => {
                setMain(item);
              }}
            />
          ))
        }
      </Stack>
      <Box
        component="img"
        src={main.url}
        alt={main.alt}
        title="product image title"
        sx={{
          width: {md:"100%", xs: "80%"},
          ml: {md:1, xs: 0},
          px: {md:2, xs: 0}
        }}
      />
    </ProductImageWrap>
  );
}

ProductImage.propTypes = {
  images: PropTypes.any
};
