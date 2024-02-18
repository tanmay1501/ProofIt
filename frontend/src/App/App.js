import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonForm from "../ButtonForm/ButtonForm";
import InputPage from "../InputPage/InputPage";
import ResultsPage from "../Results/Results";
import Landing from "../Landing/Landing";
import "./App.scss";

function App() {
  return (
    <Router>
      <header className="App-header">
        <h1 className="app-text">Guard AI</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="button-form">Questionnaire</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/input-page" element={<InputPage />} />
        <Route path="/button-form" element={<ButtonForm />} />
        <Route path="/results-page" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
