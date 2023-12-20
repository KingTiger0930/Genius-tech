import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";

import { connect } from "react-redux";

import { createReview } from "../../../actions/review";
import PropTypes from "prop-types";

function ReviewModal({createReview, closeModal, num}) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [rating, setRating] = React.useState(0);

  const submit = () => {
    let data = {title, content, rating, num};

    createReview(data);
    closeModal();
    setTitle("");
    setContent("");
    setRating(0);
  };

  return (
    <Box>
      <Typography variant="h5" component="h5" fontSize={20} color="#003187">
        Title
      </Typography>
      <TextField
        label="Input Review Title"
        name="input-title"
        id="input-title"
        variant="outlined"
        fullWidth
        size="small"
        sx={{mb: 1}}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Typography variant="h5" component="h5" fontSize={20} color="#003187">
        Rating
      </Typography>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        sx={{mr: 3}}
      />

      <Typography variant="h5" component="h5" fontSize={20} color="#003187">
        Content
      </Typography>
      <TextField
        label="Input Review Content"
        name="input-content"
        id="input-content"
        variant="outlined"
        fullWidth
        size="small"
        rows={6}
        multiline
        sx={{mb: 1}}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button variant="contained" onClick={submit}>Submit</Button>
    </Box>
  );
}

ReviewModal.propTypes = {
  createReview: PropTypes.any,
  closeModal: PropTypes.any,
  num: PropTypes.any
};

export default connect(
  null,
  { createReview }
)(ReviewModal);