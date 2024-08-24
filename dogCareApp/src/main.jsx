import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./globalStyle";

import Home from "./containers/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Home />
      <GlobalStyle />
    </>
  </StrictMode>
);
