import React from "react";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import CardFooter from "./CardFooter";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function MyCard({ card }) {
  const { stars, thumb, title, user } = card;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia component="img" alt="A thumbnail" height="140" image={thumb} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <CardFooter user={user} stars={stars} />
      </CardContent>
    </Card>
  );
}
