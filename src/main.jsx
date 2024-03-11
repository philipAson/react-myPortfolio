import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import "./index.css";
// import './Styles/index.css'
import "./Styles/ContentElements.css";
import "./Styles/MessageGroup.css";
import "./Styles/Resumé.css";
import "./Styles/About.css";
import "./Styles/Home.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
