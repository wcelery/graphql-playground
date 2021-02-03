import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function TopBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
