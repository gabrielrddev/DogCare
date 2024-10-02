import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./routes/auth.routes";
import { GlobalStyle } from "./globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthRoutes />
    <GlobalStyle />
  </BrowserRouter>
);
