import React from "react";
import ReactDOM from "react-dom";
import { Dropdown } from "./DropDown";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Custom Select</h1>
      <div style={{ margin: "16px", position: "relative" }} />
      <Dropdown />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
