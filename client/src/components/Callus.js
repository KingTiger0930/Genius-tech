import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import data from "../data.json";

function InfoBar({title, content, content2}) {
	const [phone, setPhone] = React.useState(false);
  return (
  <Stack sx={{mt: 4, mx: 2}}>
      <Typography variant="h1" component="h1" align="center" sx={{ fontSize: "3rem" }}>{title}</Typography>
      <Typography variant="h2" component="h2" align="center" sx={{maxWidth: "800px", mx: "auto", fontSize: "1.5rem"}} mt={1}>{content}</Typography>
      <Typography variant="p" component="p" align="center" sx={{maxWidth: "1200px", mx: "auto"}} mt={1}>{content2}</Typography>
      <Box display='flex' justifyContent='space-around' mt={4}>
        <Button variant="contained" sx={{px: 5, py: 1}} onClick={() => setPhone(!phone)}>{phone ? data.phone : "Call Us Now"}</Button>
      </Box>
		</Stack>
  );
}

InfoBar.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  content2: PropTypes.string,
};

export default InfoBar;
