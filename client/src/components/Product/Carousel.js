import React from "react";
import Slider from "react-slick";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CarouselItem from "./CarouselItem";
import PropTypes from "prop-types";

import './../../assets/style.css';

export default function Carousel({title, products}) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    variableWidth: false,
    arrows: false
  };
  return (
      <div className="Carousel">
        <Typography
          variant="h5"
          component="h5"
          sx={{mt: 2}}
          color='#c45500'
          fontWeight={600}
        >
          {title}
        </Typography>
        <Box sx={{mt: 10, mx: "auto"}}>
          <Slider {...settings}>
            {
              products.map((item, i) => <CarouselItem item={item} key={i} />)
            }
          </Slider>
        </Box>
      </div>
  );
}

Carousel.propTypes = {
  title: PropTypes.any,
  products: PropTypes.any
};
