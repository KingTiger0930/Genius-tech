import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

// import FrequentlyImages from './FrequentlyImages';

const FrequentlyWrap = styled(Box)(() => ({
  maxWidth: "1400px",
  margin: "auto",
  borderTop: "1px solid #CCC",
  marginTop: "40px"
}));

const FrequentlyItemBody = styled(Stack)(() => ({
  minWidth: "120px",
  maxWidth: "300px",
  marginTop: "40px"
}));
export default function Frequently({products, priceList}) {
  // const [tempdata, setTempdata] = React.useState([]);
  const [price, setPrice] = React.useState(0);

  // const toggleArray = (data) => {
  //   let flag = true;
  //   for (let i = 0; i < tempdata.length; i++) {
  //     if(tempdata[i].title === data.title){
  //       tempdata.splice(i, 1);
  //       setTempdata([...tempdata]);
  //       flag = false; break;
  //     }
  //   }
  //   if(flag) {
  //     setTempdata([...tempdata, data]);
  //   }
  // }

  React.useEffect(() => {
    let temp = [];
    for (var i = 0; i < products.length; i++) {
      temp.push(products[i]);
    }
    // setTempdata(temp)
  }, [products]);

  return (
    <FrequentlyWrap>
      <Typography
        variant="h5"
        component="h5"
        sx={{mt: 2}}
        color='#c45500'
        fontWeight={600}
      >
        Frequently bought together
      </Typography>
      <Box sx={{mt: 2}}>
        {/*<FrequentlyImages products={tempdata} />*/}
      </Box>
      <FrequentlyItemBody direction='row'>
        <FormControl fullWidth sx={{mt:2}}>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={price}
            label="Price"
            onChange={setPrice}
          >
            {
              priceList.map((item, i) => (
                <MenuItem key={i} value={item.price}>{item.title}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </FrequentlyItemBody>
    </FrequentlyWrap>
  );
}

Frequently.propTypes = {
  products: PropTypes.any,
  priceList: PropTypes.any
};