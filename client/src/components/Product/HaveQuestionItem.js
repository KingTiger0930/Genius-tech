import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Moment from "react-moment";
import Modal from "@mui/material/Modal";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { styled } from "@mui/material/styles";

import { connect } from "react-redux";

import AnswerModal from "./AnswerModal";

import { addVote } from "../../actions/question";
import PropTypes from "prop-types";

const HaveQuestionItemWrap = styled(Stack)(() => ({
  margin: "40px auto",
  marginBottom: 0,
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

function HaveQuestionItem({isAuthenticated, item, num, addVote}) {
  let {question, answers} = item;
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleOpen = () => {
    if(isAuthenticated)
      setOpen(true);
    else
      window.alert("You must sign in to write question.");
  };
  const handleClose = () => {
    setOpen(false);
  };

  const vote = (data, question, num) => {
    if(isAuthenticated)
      addVote(data, question, num);
    else
      window.alert("You must sign in to write question.");
  };

  let voteNum = 0;

  for (var i = item.likes.length - 1; i >= 0; i--) {
    voteNum += Number(item.likes[i].vote);
  }

  return (
      <HaveQuestionItemWrap direction='row'>
        <Stack sx={{pr: 2, borderRight: "1px solid #BBB"}} alignItems='center'>
          <ArrowDropUpIcon fontSize='large' onClick={() => vote(1, item._id, num)} />
          <Typography
            variant="p"
            component="p"
            sx={{mb: 1}}
          >
            {voteNum}
          </Typography>
          <Typography
            variant="p"
            component="p"
          >
            Votes
          </Typography>
          <ArrowDropDownIcon fontSize='large' onClick={() => vote(-1, item._id, num)} />
        </Stack>
        <Stack sx={{px: 1}} justifyContent='center'>
          <Stack direction='row'>
            <Typography
              variant="p"
              component="p"
              fontWeight={600}
              sx={{width: "100px"}}
            >
              Question:
            </Typography>
            <Typography
              variant="p"
              component="p"
              color='#003187'
            >
              {question}
            </Typography>
            <Typography variant="contained" sx={{ml: 2, borderRadius: "20px", backgroundColor: "#FFA41C", px: 1, cursor: "pointer"}} onClick={handleOpen}>Add Answer</Typography>
          </Stack>
          <Stack direction='row'>
            <Typography
              variant="p"
              component="p"
              fontWeight={600}
              sx={{width: "100px"}}
            >
              Answer:
            </Typography>
            <Stack>
              {answers.slice(0, show ? answers.length : 1).map((answeritem, i) => (
                <Box key={i} sx={{mt: 1}}>
                  <Typography
                    variant="p"
                    component="p"
                  >
                    {answeritem.answer}
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    color='#565959'
                  >
                    By {answeritem.user.name} on <Moment format="MMM Do YYYY">{answeritem.date}</Moment>
                  </Typography>
                </Box>
              ))}
              {answers.length > 1 && 
                (
                  show ?
                    <Typography
                      variant="p"
                      component="p"
                      color="#007185"
                      sx={{mt: 2, cursor: "pointer"}}
                      onClick={() => setShow(false)}
                    >
                      See Less
                    </Typography>
                  :
                    <Typography
                      variant="p"
                      component="p"
                      color="#007185"
                      sx={{mt: 2, cursor: "pointer"}}
                      onClick={() => setShow(true)}
                    >
                      See More Answer
                    </Typography>
                )
              }
            </Stack>
          </Stack>
        </Stack>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <AnswerModal question={item} num={num} closeModal={handleClose}/>
          </Box>
        </Modal>
      </HaveQuestionItemWrap>
  );
}

HaveQuestionItem.propTypes = {
  isAuthenticated: PropTypes.any,
  item: PropTypes.any,
  num: PropTypes.any,
  addVote: PropTypes.any
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {addVote})(HaveQuestionItem);
