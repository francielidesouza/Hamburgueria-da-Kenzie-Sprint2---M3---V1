import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ResetGlobal } from "./styles/Reset";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResetGlobal />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
