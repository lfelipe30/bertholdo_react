import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";
import App from "./App";
import NavBar from "./components/NavBar/NavBar";

ReactDOM.render(
   <React.StrictMode>
      <NavBar />
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);
