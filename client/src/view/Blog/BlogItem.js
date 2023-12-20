import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Blog({item}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link rel="canonical" to={item.url}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={item.imageurl}
        />
      </Link>
      <CardContent>
        <Link rel="canonical" to={item.url} className="text-decoration-none">
          <Typography gutterBottom variant="h5" component="div" sx={{height: "70px", overflow: "hidden", textOverflow: "ellipsis"}}>
            {item.title}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary" sx={{height: "60px", overflow: "hidden", textOverflow: "ellipsis"}}>
          {item.subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

Blog.propTypes = {
  item: PropTypes.any
};