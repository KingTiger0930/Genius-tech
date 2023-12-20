import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

export default function CompareItem({product}) {
  return (
      <>
        <Stack>
          <Box
            component="img"
            alt="compare item"
            title="compare item tooltip"
            src={product.images[0].url}
            sx={{
              maxWidth: "140px",
              width: "100%",
              my: 2,
              mx: "auto"
            }}
          />
        </Stack>
      </>
  );
}

CompareItem.propTypes = {
  product: PropTypes.any
};
