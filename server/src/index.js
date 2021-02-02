import pkg from "apollo-server";
import { typeDefs } from "./schema.js";

const { ApolloServer } = pkg;

const mocks = {
  Card: () => ({
    id: () => "card_01",
    title: () => "Im card title",
    user: () => {
      return {
        id: "user_01",
        name: "wcelery",
        pic:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumb: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    stars: () => 6,
  }),
};

const server = new ApolloServer({ typeDefs, mocks }); //same as {typeDefs: typeDefs}
server.listen().then(() => {
  console.log(`Server is running at port ...`);
});
