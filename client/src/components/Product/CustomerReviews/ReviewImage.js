import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { styled } from "@mui/material/styles";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReviewImageWrap = styled(Box)(() => ({
  width: "80%",
}));
// "https://le-cdn.website-editor.net/s/8aca907fa1814ccea9874324265b4bee/dms3rep/multi/opt/5fff3c833949e-1920w.jpg?Expires=1641746593&Signature=pAlwA3dRL8CPMuSJg4azQuxQtl6ND2OsPVtA6O1b2HtAu7KiAozcGPZRkHWXJcbxJd4k-4lkO4ZMJcrV5d6g8PGXDDV5OQEMNlH8yBvP3tA6lFxl50QJPrRGEz~6b4G0iQbv-1Cj~WeQDH~bHFRIiID-jNe9rR2alRrNBvVtA~P5jKqwNstc3M9WzSMCS4MfEsePAWeygSYwypHaczWerwV4Q4JWcnKhfz6j4CYIVg2uf4svF~yQk0pIDIADgmlwlE8d-CSMWPV9rEn3NPbAioD65F3-tW6GBrlZvSFITUEX~STFw-i0lK0I6zMnh9v2zF3Md20JqoBousePexY5dg__&Key-Pair-Id=K2NXBXLF010TJW"
export default function ReviewImage({product}) {
  return (
    <ReviewImageWrap>
      <Typography
        variant="p"
        component="p"
        sx={{mb: 1, fontSize: "20px"}}
        color='#000'
        fontWeight={700}
      >
        Reviews with images
      </Typography>
      
      <Stack direction='row'>
        {
          [1,2,3,4].map(i => (
            <Link rel="canonical" to='/' key={i}>
              <Box
                component="img"
                alt="review image"
                title="review image tooltip"
                src={product.images[0].url}
                sx={{
                  width: {
                    md: "200px",
                    xs: "50px"
                  },
                  mr: 1
                }}
              />
            </Link>
          ))
        }
      </Stack>
    </ReviewImageWrap>
  );
}

ReviewImage.propTypes = {
  product: PropTypes.any
};