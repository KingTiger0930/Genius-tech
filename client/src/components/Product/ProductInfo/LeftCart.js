import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { connect } from "react-redux";

import { addCart, selectItem } from "../../../actions/cart";

// import {LocationOn, Lock} from '@mui/icons-material';

import { styled } from "@mui/material/styles";

import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const LeftCartWrap = styled(Box)(() => ({
  border: "1px solid #bbb",
  borderRadius: "8px",
  padding: "15px"
}));

function LeftCart({priceList, addCart, cart, selectItem}) {
  const [service, setService] = React.useState({price: 0});
  let { selectedItem } = cart;
  let history = useHistory();

  const submit = () => {
    if(service.price === 0) {
      window.alert("please select service you want.");
      return;
    }

    addCart(service);
  };
  return (
    <LeftCartWrap>

      <FormControl fullWidth sx={{mt:2}}>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service.price}
          label={service.price}
          onChange={(e) => {setService({price: e.target.value}); selectItem({price: e.target.value});}}
        >
          <MenuItem value={0}>Select your price.</MenuItem>
          {
            priceList.map((item, i) => (
              <MenuItem key={i} value={item.price}>{item.title}</MenuItem>
            ))
          }
        </Select>
      </FormControl>

      <Button sx={{height: "30px", width: "100%", mt: 2, color: "#000", borderRadius: "20px", backgroundColor: "#FFD814", fontSize: "12px"}} onClick={submit} >Add to Cart</Button>
      <Button sx={{height: "30px", width: "100%", mt: 1, color: "#000", borderRadius: "20px", backgroundColor: "#FA8900", fontSize: "12px"}} onClick={() => {
        if(selectedItem) {
          history.push("/checkoutone");
        }
      }}>
        Buy Now
      </Button>
      {/*<button style={{marginTop: '10px', width: '100%', textAlign: 'left', padding: '5px 10px'}}>Add to List</button>*/}
    </LeftCartWrap>
  );
}

LeftCart.propTypes = {
  priceList: PropTypes.any,
  addCart: PropTypes.any,
  selectItem: PropTypes.any,
  cart: PropTypes.any
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  { addCart, selectItem }
)(LeftCart);