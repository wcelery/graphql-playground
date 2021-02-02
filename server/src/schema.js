import pkg from "apollo-server";

const { gql } = pkg;

export const typeDefs = gql`
  "Card represents a single post"
  type Card {
    id: ID!
    thumb: String!
    title: String!
    user: User!
    stars: Int
  }

  "User is author of the post"
  type User {
    id: ID!
    pic: String!
    name: String!
  }

  "The fields of this type are entry points into the rest of this schema"
  type Query {
    "Get all cards"
    cardsToShow: [Card!]!
  }
`;
