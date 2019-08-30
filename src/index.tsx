import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StoreProvider } from "./components/App/Store";
import GlobalStyle from "./components/GlobalStyle";

ReactDOM.render(
  <StoreProvider>
    <GlobalStyle />
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
