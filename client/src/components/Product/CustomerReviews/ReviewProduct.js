import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { styled } from "@mui/material/styles";

import ReviewModal from "./ReviewModal";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const ReviewProductWrap = styled(Box)(() => ({
	width: "60%",
  borderTop: "1px solid #CCC",
  marginTop: "40px",
  paddingTop: "20px"
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ReviewProduct({num, isAuthenticated}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if(isAuthenticated)
      setOpen(true);
    else
      window.alert("You must sign in to write review.");
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <>
        <ReviewProductWrap>
          <Typography
            variant="p"
            component="p"
            sx={{mb: 1, fontSize: "20px"}}
            color='#000'
            fontWeight={700}
          >
            Review this product
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{mb: 1, fontSize: "14px"}}
            color='#000'
          >
            Share your thoughts with other customers
          </Typography>

          <Button variant='outlined' sx={{width: "100%", mt: 2, borderColor: "#BBB", color: "#0F1111"}} onClick={handleOpen}>Write a customer Review</Button>
        </ReviewProductWrap>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <ReviewModal num={num} closeModal={handleClose}/>
          </Box>
        </Modal>
      </>
  );
}

ReviewProduct.propTypes = {
  num: PropTypes.any,
  isAuthenticated: PropTypes.any,
  auth: PropTypes.any
};

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(ReviewProduct);