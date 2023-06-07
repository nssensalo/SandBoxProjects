import React from "react";
import ReactDOM from "react-dom";

const currentYear = new Date().getFullYear();
const name = "Nansamba Ssensalo";
ReactDOM.render(
  <div>
    <h1 className="header">Hey There</h1>
    <p>copyright {currentYear}</p>
    <p>created by {name}</p>
  </div>,

  document.getElementById("root")
);
