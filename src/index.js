import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import ErrorBoundary from "./components/ErrorBoundary";
import App from "./App";

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);
