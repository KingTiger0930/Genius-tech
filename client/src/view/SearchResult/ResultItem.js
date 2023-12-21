import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export default function ResultItem({ item }) {
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <Typography type="body2" style={{ color: "#0078d2" }}>
              {item.title}
            </Typography>
          }
          secondary={<React.Fragment>{item.description}</React.Fragment>}
        ></ListItemText>
      </ListItem>
      <Divider />
    </List>
  );
}

ResultItem.propTypes = {
  item: PropTypes.any,
};
