import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root for React 18
const root = ReactDOM.createRoot(rootElement);

// Render the app within the root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Unregister service worker
serviceWorker.unregister();
