import React from 'react';
import { createRoot } from "react-dom/client";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import './index.css';
import App from './App';
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
