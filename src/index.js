import React from "react";
import ReactDOM from "react-dom";
import "./assets/font/font.css";
import App from "./App";

import { Wrapper } from "./components/shared/layout";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
