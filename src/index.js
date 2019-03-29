import React from "react";
import ReactDOM from "react-dom";
import logClockTime from "./imperative";
import startTicking from "./functional";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Display this placehorder for now</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

///setInterval(logClockTime, 1000);

startTicking();
