import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "namaste react");

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    {
      id: "child",
    },
    React.createElement("h1", {}, "i am react hero")
  )
);

root.render(parent);
