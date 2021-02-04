import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginBottom: 20,
  },
});

export default function TopBar() {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          graphql-playground
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
