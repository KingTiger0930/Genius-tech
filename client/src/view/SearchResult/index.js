import React from "react";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import { Stack } from "@mui/material";

import ResultItem from "./ResultItem";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  backgoundColor: alpha(theme.palette.common.white, 0.15),
  border: "1px solid #e0e0e0",
  "&:hover": {
    backgoundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  maxWidth: "800px",
  margin: "10px auto",
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

const SearchResult = () => {
  const [number, setNumber] = React.useState(5);
  const resultlist = [
    {
      title: "What is Genius Tech?",
      description:
        "Genius Tech – more than just the traditional break-fix IT service, is offering a wide range of customized IT solutions to support your business`s IT infrastructure. From applications to hardware to networking, our team of highly dedicated IT experts will help manage, monitor and maintain your IT environment as well as detect issues and areas that required optimization to ensure long term business resilience.",
    },
    {
      title: "Let’s Grow Together – Our Vision!",
      description:
        "What kept us succeeding is our success built on trust and love we earned from our loyal clients. We envisioned remaining with our clients from the very beginning to the end making them our loyal customers – solving complex and complicated challenges in ways that help minimize risks and maximize benefits eventually.",
    },
    {
      title: "What is the Our Mission?",
      description:
        "Genius Tech lessens the complexity of navigating a persistently evolving IT landscape. With many years of experience, a deep bench of technology experts and groundbreaking software, we envisioned helping you achieve your business objectives. We enable businesses to access integrated customized IT solutions the way never before. Our customer-oriented model enables that we prioritize our customers first offering an incorporated Tech portfolio, consulting-led approaches and a multitude of optimization that encompass the entire Enterprise value chain. Hiring our Managed IT solutions, you will enjoy tailored IT solutions, managed support and service as well as will benefit from our team’s vast industry experience, monitoring tools and robust technology. Whether this is to enhance productivity, reduce costs, boost efficiency or maximize growth – Genius Tech is you can count on! So, why wait anymore? Contact us today and let us help you like never before.",
    },
    {
      title: "Core Goal",
      description:
        "We vigorously ensure consider ethical principles and policies – set by the company, to be adhered to. Hence, our “ethics program” aimed to create and raise awareness among employees about working in accordance with designed ethics that act as a guiding force – enabling our workers to perform well and make sound decisions based on transparency, integrity and honesty. In addition, our compliance program is focused more on ensuring that both the internal and external regulations are fully adhered to by every employee in the company.",
    },
    {
      title: "How to choose the right network cabling?",
      description:
        "Choosing the right network cabling services in Richmond Hills, Mississauga or at any other location in the globe is of utmost importance for your business. Although a cabling engineer can help you get the best cabling for your business, however, below mentioned are a few key codes that can help you select the right and correct cabling.",
    },
    {
      title: "Network Cabling Services",
      description:
        "Often neglected by businesses, network cabling services in Toronto and worldwide keep your organisation connected to help you carry out business functions smoothly.Whether your employees, partners and external support teams need to access your hardware or you want to introduce video networking or CCTV, ITRM's Genius Tech cabling services can help you with all your network cabling requirements.",
    },
    {
      title: "What is the most common type of network cabling in network cable installation?",
      description:
        "Various types of network cabling are available in the market. A few of – which vary in frequency and characteristics, include Cat5e, Cat6 and Cat7. Businesses can use any of these network cablings as per their certain needs however the most advanced and commonly sued cable is Cat5e.",
    },
  ];

  const onChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Genius Tech Inc</title>
        <meta name="description" content="Genius Tech Inc - Search Result" />
      </Helmet>
      {/* <Box
        sx={{
          mt: "180px",
          mx: "auto",
          maxWidth: "960px",
          pb: 2,
          borderBottom: "1px solid #299ec6",
        }}
      >
        <Typography variant="h3" component="h3" align="center" fontWeight={600}>
          Search Result
        </Typography>
      </Box> */}
      <Box
        sx={{
          mt: "180px",
          mx: "auto",
          maxWidth: "960px",
          pb: 2,
          // borderBottom: "1px solid #299ec6",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={onChange}
          />
        </Search>
      </Box>
      <Stack sx={{ my: 5, mx: "auto", maxWidth: "960px" }}>
        <Grid container sx={{ maxWidth: "1000px", mx: "auto", my: 4 }}>
          {resultlist.slice(0, number).map((item, i) => (
            <Grid item xs={12} key={i}>
              <ResultItem item={item} key={i} />
            </Grid>
          ))}
        </Grid>
        <Box display="flex">
          <Button
            variant="contained"
            sx={{ px: 5, py: 1 }}
            onClick={() => setNumber(number + 5)}
          >
            Road More
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default SearchResult;
