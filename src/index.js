import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./asset/scss/style.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
