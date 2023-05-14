import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Create a root for ReactDOM rendering
ReactDOM.createRoot(document.getElementById("root")).render(
   // Enable strict mode for additional checks during development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

