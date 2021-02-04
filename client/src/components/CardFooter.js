import React from "react";
import { Box, Typography, Avatar, Grid } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

export default function CardFooter({ user, stars }) {
  const { name, pic } = user;

  return (
    <Box>
      <Grid container justify="flex-start" alignItems="center" spacing="2">
        <Grid item>
          <Avatar alt="Remy Sharp" src={pic} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" color="textSecondary">
            {name}
          </Typography>
          <Grid container>
            <Grid item xs>
              <StarIcon color="disabled" />
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1" color="textSecondary">
                {stars}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
