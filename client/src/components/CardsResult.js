import React from "react";

export default function CardsResult({ loading, error, data, children }) {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return <p>loading...</p>;
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
}
