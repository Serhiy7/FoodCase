import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter basename="/FoodCase/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
