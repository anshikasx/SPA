import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HouseProvider } from "./context/HouseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HouseProvider>
      <App />
    </HouseProvider>
  </React.StrictMode>
);