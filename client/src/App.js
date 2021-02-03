import "./App.css";
import { Button, Typography } from "@material-ui/core";
import TopBar from "./components/TopBar";
import { gql, useQuery } from "@apollo/client";

export const TRACKS = gql`
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

function App() {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <TopBar />
      <Typography>{JSON.stringify(data)}</Typography>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
