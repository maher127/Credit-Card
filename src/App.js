import React from "react";
import Title from "./Title";
import Puce from "./Puce";
import Number from "./Number";
import Name from "./Name";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-img">
        <Title />
        <Puce />
        <Number />
        <Name />
      </div>
    </div>
  );
}

export default App;
