import "./App.css";
import { Button } from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import TopBar from "./components/TopBar";
import MyCard from "./components/MyCard";

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

function App() {
  const { loading, error, data } = useQuery(CARDS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <TopBar />
      {data?.cardsToShow?.map((card) => (
        <MyCard key={card.id} card={card} />
      ))}
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
