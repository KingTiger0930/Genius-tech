import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { connect } from "react-redux";
import { deleteItem } from "../../actions/cart";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./../../assets/style.css";

function CheckOut({deleteItem, cart}) {
  let { carts } = cart;

  let totalprice = 0;

  for (var i = carts.length - 1; i >= 0; i--) {
    totalprice += carts[i].price;
  }

  return (
    <Box sx={{maxWidth: "1100px", mx: "auto"}}>
      <Typography variant="h5" component="h5" fontWeight={600}>
        CheckOut
      </Typography>
      <Grid container sx={{maxWidth: "1100px", px: 5, my: 20}}>
        <Grid item xs={12} sx={{p: 2}}>
          <Box sx={{p: 2, border: "2px solid #f4f4f4", height: "100%"}}>
            <Typography variant="h5" component="h5" fontWeight={600} sx={{mb: 2}}>
              Your Order
            </Typography>

            <Stack>
              <Stack direction='row' justifyContent='start'>
                <Box sx={{width: "50%", px: 1, py: 2}}>
                  <Typography variant="p" component="p" fontWeight={600}>
                    Product
                  </Typography>
                </Box>
                <Box sx={{width: "30%", px: 1, py: 2}}>
                  <Typography variant="p" component="p" fontWeight={600}>
                    SubTotal
                  </Typography>
                </Box>
              </Stack>
              {
                cart && carts.map((item, i) => (
                  <Stack direction='row' justifyContent='start' key={i}>
                    <Box sx={{width: "50%", px: 1, py: 2}}>
                      <Typography variant="p" component="p">
                        ${item.title}
                      </Typography>
                    </Box>
                    <Box sx={{width: "30%", px: 1, py: 2}}>
                      <Typography variant="p" component="p">
                        ${item.price}
                      </Typography>
                    </Box>
                    <Box sx={{width: "20%", px: 1, py: 2}}>
                      <IconButton aria-label="delete" onClick={() => deleteItem(i)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Stack>
                ))
              }
              <Stack direction='row' justifyContent='start'>
                <Box sx={{width: "50%", px: 1, py: 2}}>
                  <Typography variant="p" component="p" fontWeight={600}>
                    SubTotal
                  </Typography>
                </Box>
                <Box sx={{width: "30%", px: 1, py: 2}}>
                  <Typography variant="p" component="p">
                    ${totalprice}
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            <Stack>
              <Stack direction='row' justifyContent='space-around'>
                <Stack direction='row'>
                  <Link rel="canonical" to='/' className="Cart">
                    <Button variant="contained" sx={{px: 5, py: 1, mx: 2}}>
                        Go on
                    </Button>
                  </Link>
                  <Link rel="canonical" to='/checkout' className="Cart">
                    <Button variant="contained" sx={{px: 5, py: 1, mx: 2}}>
                      CheckOut
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

CheckOut.propTypes = {
  deleteItem: PropTypes.any,
  cart: PropTypes.any
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  { deleteItem }
)(CheckOut);