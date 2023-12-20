import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { PayPalButton } from "react-paypal-button-v2";

import { connect } from "react-redux";
import { addCart } from "../../actions/cart";
import PropTypes from "prop-types";

function CheckOutOne({cart}) {
  let { selectedItem } = cart;
  let carts = [selectedItem];

  let totalprice = 0;

  for (var i = carts.length - 1; i >= 0; i--) {
    totalprice += carts[i].price;
  }

  let payPal_ID = "Aa7tJgWKi-6yDNEfocy5zyI2Tn2wxvVOcnWBqSesgiL9QKEwDWTX4TXU96_P2z61a9jA-10hTGfa6t4W";
  return (
    <Box sx={{maxWidth: "1100px", mx: "auto"}}>
      <Typography variant="h5" component="h5" fontWeight={600}>
        CheckOut
      </Typography>
      <Grid container sx={{maxWidth: "1100px", px: 5, my: 20}}>
        <Grid item xs={12} sm={6} sx={{p: 2}}>
          <Stack direction='row' justifyContent='space-between'>
            <Stack sx={{mt: 2, width: "45%"}}>
              <TextField className="standard-basic" label="First Name" variant="standard" size="small" /> 
            </Stack>
            <Stack sx={{mt: 2, width: "45%"}}>
              <TextField className="standard-basic" label="Last Name" variant="standard" size="small" /> 
            </Stack>
          </Stack>
          <Stack sx={{mt: 4}}>
            <TextField className="standard-basic" label="Company Name" variant="standard" size="small" /> 
          </Stack>
          <Stack sx={{mt: 4}}>
            <TextField className="standard-basic" label="Country / Region" variant="standard" size="small" /> 
          </Stack>
          <Stack sx={{mt: 4}}>
            <TextField className="standard-basic" label="Street Address" variant="standard" size="small" /> 
          </Stack>
          <Box display='flex' justifyContent='space-around' sx={{mt: 5}}>
            <PayPalButton
              amount={totalprice}
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                window.alert("Transaction completed");
                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                  method: "post",
                  body: JSON.stringify({
                    orderID: data.orderID
                  })
                });
              }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      currency_code: "USD",
                      value: totalprice
                    },
                    products: cart
                  }]
                });
              }}
              onApprove={(data, actions) => {
                // Capture the funds from the transaction
                return actions.order.capture().then(function() {
                  // Show a success message to your buyer
                  // OPTIONAL: Call your server to save the transaction
                  return fetch("/paypal-transaction-complete", {
                    method: "post",
                    body: JSON.stringify({
                      orderID: data.orderID
                    })
                  });
                });
              }}
              options={{
                clientId: payPal_ID
              }}
            />
            {/*<Button variant="contained" sx={{px: 5, py: 1}}>CheckOut</Button>*/}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{p: 2}}>
          <Box sx={{p: 2, border: "2px solid #f4f4f4", height: "100%"}}>
            <Typography variant="h5" component="h5" fontWeight={600} sx={{mb: 2}}>
              Your Order
            </Typography>

            <Stack>
              <Stack direction='row' justifyContent='space-between'>
                <Box sx={{width: "60%", px: 1, py: 2}}>
                  <Typography variant="p" component="p" fontWeight={600}>
                    Product
                  </Typography>
                </Box>
                <Box sx={{width: "40%", px: 1, py: 2}}>
                  <Typography variant="p" component="p" fontWeight={600}>
                    SubTotal
                  </Typography>
                </Box>
              </Stack>
              {
                cart && carts.map((item, i) => (
                  <Stack direction='row' justifyContent='space-between' key={i}>
                    <Box sx={{width: "60%", px: 1, py: 2}}>
                      <Typography variant="p" component="p">
                        ${item.title}
                      </Typography>
                    </Box>
                    <Box sx={{width: "40%", px: 1, py: 2}}>
                      <Typography variant="p" component="p">
                        ${item.price}
                      </Typography>
                    </Box>
                  </Stack>
                ))
              }
              <Stack direction='row' justifyContent='space-between'>
                <Box sx={{width: "60%", px: 1, py: 2}}>
                  <Typography variant="p" component="p" fontWeight={600}>
                    SubTotal
                  </Typography>
                </Box>
                <Box sx={{width: "40%", px: 1, py: 2}}>
                  <Typography variant="p" component="p">
                    ${totalprice}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
            {/*<Typography variant="p" component="p" sx={{mt: 2}}>
              Bring us your challenges and concerns so that we can serve you better.
            </Typography>

            <Typography variant="p" component="p" fontWeight={600} sx={{mt: 6}}>
              +1 647 9518664
            </Typography>
            <Typography variant="p" component="p" fontWeight={600}>
              sales@genius-tech.ca
            </Typography>

            <Typography variant="p" component="p" sx={{mt: 2}}>
              209 Fort York Blvd Toronto, ON M5V 4A1
            </Typography>*/}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

CheckOutOne.propTypes = {
  cart: PropTypes.any
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  { addCart }
)(CheckOutOne);