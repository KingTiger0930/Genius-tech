import React from "react";

import { styled, alpha } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

// import { Wrapper, Status } from "@googlemaps/react-wrapper";

import { bloglist } from "./blogdata.js";

import BlogItem from "./BlogItem";
 
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: "1px solid #e0e0e0",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "40%",
  maxWidth: "400px",
  margin: "10px auto"
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
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Blog() {
  const [number, setNumber] = React.useState(10);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <>
        <Box sx={{mt: "180px", mx: "auto", maxWidth: "960px", pb: 2, borderBottom: "1px solid #299ec6"}}>
          <Typography variant="h3" component="h3" align="center" fontWeight={600}>Blog</Typography>
        </Box>
        <Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              id="search-blog"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <Stack sx={{my: 5, mx: "auto", maxWidth: "960px"}}>
          <Grid container sx={{maxWidth: "1000px", mx: "auto", my: 4}}>
            {
              bloglist.slice(0, number).map((item, i) => (
                <Grid item xs={6} md={4} sx={{px: 1, mb: 2}} key={i}>
                  <BlogItem item={item} key={i} />
                </Grid>
              ))
            }
          </Grid>
          <Box display='flex'>
            <Button variant="contained" sx={{px: 5, py: 1}} onClick={() => setNumber(number+5)}>Road More</Button>
          </Box>
        </Stack>
      </>
  );
}
