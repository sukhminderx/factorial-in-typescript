import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Factorial } from "./factorial";

function App() {
  const factorial = new Factorial();
  
  console.log(factorial.factorial(6));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Check your console for algo</p>
      </header>
    </div>
  );
}

export default App;
