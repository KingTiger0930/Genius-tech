import React from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import { styled } from "@mui/material/styles";

import { connect } from "react-redux";

import { selectItem } from "../../../actions/cart";
import PropTypes from "prop-types";

import "./../../../assets/style.css";

const ProductImageWrap = styled(Stack)(() => ({
  marginBottom: "45px"
}));

function ProductData({ maincontent, title, content, subtitle, subcontent, review, questions, selectItem, selectedItem, executeScroll }) {
  let { ratingcount, count } = review;
  let totalrating = 0;

  for (var i = 0, s = 5; i < ratingcount.length; i++, s--) {
    totalrating += s * ratingcount[i];
  }

  totalrating = totalrating / count;

  React.useEffect(() => {
    selectItem(null);
  }, []);

  return (
    <ProductImageWrap>
      <Typography variant='h5' component='h5' fontWeight={600} color='#003187'>{title}</Typography>
      {/* <Typography variant="p" component="p" color='#003187' sx={{mt: 2, fontSize: '18px'}}>
        {subtitle}
      </Typography> */}
      <Typography variant='p' component='p' fontWeight={500} color='#003187'>{content}</Typography>

      <Stack direction='row' alignItems='center'>
        <Rating
          name="simple-controlled"
          value={totalrating}
          size='small'
          readOnly
          sx={{ mr: 3 }}
        />
        <Typography className="ProductData_1" onClick={executeScroll} variant='p' component='p' color='#007185'>{count} ratings</Typography>

        <span className="ProductData_2">|</span>
        <Typography className="ProductData_3" onClick={executeScroll} variant='p' component='p' color='#007185'>{questions.length} answered questions</Typography>
      </Stack>

      <Typography variant='p' component='p' color='#777' sx={{ pt: 1, borderTop: "1px solid #bbb" }}>Price: <span className="ProductData_6">${selectedItem ? selectedItem.price : 0}</span></Typography>
      {/*<Typography variant='p' component='p' color='#777' sx={{mt: 1}}>$24.88 Shipping & Import Fees Deposit to Russian Federation Details </Typography>*/}
      
      <Typography variant='h5' comh5onent='h5' sx={{ pt: 1, mt: 2, borderTop: "1px solid #bbb" }}>{subtitle}</Typography>
      <Typography variant='p' component='p' fontWeight={500} color='#003187'>{subcontent}</Typography>
      {
        typeof maincontent[0] == "object" ?
          maincontent.map((item, i) => (
            <div key={i}>
              <Typography variant='p' component='p' fontWeight={600} color='#003187'>{(i + 1) + ". " + item.title}</Typography>
              <Typography variant='p' component='p'>{item.subtitle}</Typography>
              <ul className="ProductData_4">
                {
                  item.list.map((subitem, i) => (
                    <li key={i}>{subitem}</li>
                  ))
                }
              </ul>
            </div>
          ))
          : (
            <ul className="ProductData_5">
              {
                maincontent.map((item, i) => (
                  <li key={i}>{item}</li>
                ))
              }
            </ul>
          )
      }
    </ProductImageWrap>
  );
}

ProductData.propTypes = {
  maincontent: PropTypes.any,
  title: PropTypes.any,
  content: PropTypes.any,
  subtitle: PropTypes.any,
  subcontent: PropTypes.any,
  review: PropTypes.any,
  questions: PropTypes.any,
  selectItem: PropTypes.any,
  selectedItem: PropTypes.any,
  executeScroll: PropTypes.any
};

const mapStateToProps = state => ({
  review: state.review,
  questions: state.question.questions
});

export default connect(
  mapStateToProps,
  { selectItem }
)(ProductData);