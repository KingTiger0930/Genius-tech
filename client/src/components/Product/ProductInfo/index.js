import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// import Frequently from './Frequently';
import ProductImage from "./ProductImage";
import ProductData from "./ProductData";
import LeftCart from "./LeftCart";
import FreContent from "./FreContent";
import AdvertCard from "../AdvertCard";
import ContactPopup from "./ContactPopup";

import { styled } from "@mui/material/styles";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProductInfoWrap = styled(Box)(() => ({
  maxWidth: "1400px",
  margin: "auto",
  marginTop: "100px"
}));

function ProductInfo({ product, maincontent, content1, content2, priceList, cart, executeScroll, request }) {
  // const [tempdata, setTempdata] = React.useState([]);

  return (
    <ProductInfoWrap>
      <Grid container>
        <Grid item md={10} xs={12} sx={{ px: 2 }}>
          <Grid container>
            <Grid item md={6} xs={12}>
              <ProductImage images={product.images} />
              {/*<Frequently products={freproducts} priceList={priceList} />*/}

            </Grid>
            <Grid item md={6} xs={12}>
              <ProductData
                executeScroll={executeScroll}
                selectedItem={cart.selectedItem}
                product={product}
                maincontent={maincontent.list}
                title={maincontent.title}
                content={maincontent.content}
                subtitle={maincontent.subtitle}
                subcontent={maincontent.subcontent}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FreContent value={content2.list}
                title={content2.title}
                subtitle={content2.subtitle}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FreContent value={content1.list}
                title={content1.title}
                subtitle={content1.subtitle}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} xs={12}>
          {
            request ? <ContactPopup /> : <LeftCart priceList={priceList} />
          }
          
                
          <AdvertCard product={product} selectedItem={cart.selectedItem} />
        </Grid>
      </Grid>
    </ProductInfoWrap>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.any,
  maincontent: PropTypes.any,
  content1: PropTypes.any,
  content2: PropTypes.any,
  priceList: PropTypes.any,
  cart: PropTypes.any,
  executeScroll: PropTypes.any,
  request: PropTypes.any
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(
  mapStateToProps
)(ProductInfo);