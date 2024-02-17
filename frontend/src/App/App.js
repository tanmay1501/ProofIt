import React from "react";
import Questionnaire from "../Questionnaire/Questionnaire";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="vertical-text">Shield Pro</h1>
      </header>

      <div className="main-content">
        <Questionnaire />
      </div>
    </div>
  );
}

export default App;
