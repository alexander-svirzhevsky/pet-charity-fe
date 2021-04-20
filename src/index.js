import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

import "./index.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;

  };
  #root {
    height: 100vh;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
