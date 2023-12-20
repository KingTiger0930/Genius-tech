import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";

import { styled } from "@mui/material/styles";

import QuestionModal from "./QuestionModal";
import HaveQuestionItem from "./HaveQuestionItem";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const SearchWrap = styled(Box)(() => ({
  maxWidth: "1400px",
  borderTop: "1px solid #CCC",
  margin: "40px auto",
  marginBottom: 0,
  width: "100%",
}));

const SearchBodyWrap = styled(Box)(() => ({
  minWidth: "300px",
  width: "50%",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: 0,
  marginTop: "40px",
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  border: "1px solid #888C8C",
  borderRadius: "3px",
  boxShadow: "0 1px 2px rgb(15 17 17 / 15%) in"
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
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

function HaveQuestion({num, isAuthenticated, questions}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if(isAuthenticated)
      setOpen(true);
    else
      window.alert("You must sign in to write question.");
  };
  const handleClose = () => {
    setOpen(false);
  };  

  return (
      <SearchWrap id="questions">
        <SearchBodyWrap>
          <Stack direction='row' sx={{mt: 2}} alignItems='center'>
            <Typography
              variant="h5"
              component="h5"
              fontWeight={600}
              onClick={handleOpen}
            >
              Have a question?
            </Typography>
            <Typography variant="contained" sx={{ml: 2, borderRadius: "20px", backgroundColor: "#FFA41C", px: 1, cursor: "pointer"}} onClick={handleOpen}>Add Question</Typography>
          </Stack>
          <Typography
            variant="p"
            component="p"
            sx={{mt: 1}}
            color='#565959'
          >
            Find answers in product info, Q&As, reviews
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              id="have-question-product"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {questions.map((item, i) => (
            <HaveQuestionItem key={i} item={item} num={num} />
          ))}
        </SearchBodyWrap>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <QuestionModal num={num} closeModal={handleClose}/>
          </Box>
        </Modal>
      </SearchWrap>
  );
}

HaveQuestion.propTypes = {
  num: PropTypes.any,
  isAuthenticated: PropTypes.any,
  questions: PropTypes.any
};

const mapStateToProps = state => ({
  questions: state.question.questions,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(HaveQuestion);