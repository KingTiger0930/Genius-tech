import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Rating from '@mui/material/Rating';

import { connect } from "react-redux";

import { createQuestion } from "../../actions/question";
import PropTypes from "prop-types";

function QuestionModal({createQuestion, closeModal, num}) {
  const [question, setQuestion] = React.useState("");

  const submit = () => {
    let data = {question, num};

    createQuestion(data);
    setQuestion("");
    closeModal();
  };

  return (
    <Box>
      <Typography variant="h5" component="h5" fontSize={20} color="#003187">
        Question
      </Typography>
      <TextField
        label="Input Review Title"
        variant="outlined"
        fullWidth
        size="small"
        sx={{mb: 1}}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <Button variant="contained" onClick={submit}>Submit</Button>
    </Box>
  );
}

QuestionModal.propTypes = {
  createQuestion: PropTypes.any,
  closeModal: PropTypes.any,
  num: PropTypes.any
};

export default connect(
  null,
  { createQuestion }
)(QuestionModal);