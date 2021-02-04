import "./App.css";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import TopBar from "./components/TopBar";
import MyCard from "./components/MyCard";
import CardsResult from "./components/CardsResult";

export const CARDS = gql`
  query Query {
    cardsToShow {
      id
      thumb
      title
      user {
        id
        pic
        name
      }
      stars
    }
  }
`;

const useStyles = makeStyles({
  root: {
    padding: 20,
    maxWidth: "100vw",
  },
});

function App() {
  const { loading, error, data } = useQuery(CARDS);
  const classes = useStyles();

  return (
    <div>
      <TopBar />
      <CardsResult loading={loading} error={error} data={data}>
        <Grid container spacing="3" className={classes.root}>
          {data?.cardsToShow?.map((card) => (
            <Grid key={card.id} item>
              <MyCard card={card} />
            </Grid>
          ))}
        </Grid>
      </CardsResult>

      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
