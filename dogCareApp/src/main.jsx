import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./globalStyle";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
      <GlobalStyle />
    </>
  </StrictMode>
);
