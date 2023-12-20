import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material/styles";

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

export default function HaveQuestion() {
  return (
      <SearchWrap>
        <SearchBodyWrap>
          <Typography
            variant="h5"
            component="h5"
            sx={{mt: 2}}
            fontWeight={600}
          >
            Have a question?
          </Typography>
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
              id="have-question-ourservice"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </SearchBodyWrap>
      </SearchWrap>
  );
}
