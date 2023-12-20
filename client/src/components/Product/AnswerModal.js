import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { connect } from "react-redux";

import { addAnswer } from "../../actions/question";
import PropTypes from "prop-types";

function AnswerModal({addAnswer, closeModal, question, num}) {
  const [answer, setAnswer] = React.useState("");

  const submit = () => {
    let data = {answer, question: question._id, num};

    addAnswer(data);
    setAnswer("");
    closeModal();
  };

  return (
    <Box>
      <Typography variant="h5" component="h5" fontSize={20} color="#003187">
        Answer
      </Typography>
      <TextField
        label="Input your Answers"
        variant="outlined"
        fullWidth
        size="small"
        sx={{mb: 1}}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <Button variant="contained" onClick={submit}>Submit</Button>
    </Box>
  );
}

AnswerModal.propTypes = {
  addAnswer: PropTypes.any,
  closeModal: PropTypes.any,
  question: PropTypes.any,
  num: PropTypes.any
};

export default connect(
  null,
  { addAnswer }
)(AnswerModal);