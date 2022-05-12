import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
