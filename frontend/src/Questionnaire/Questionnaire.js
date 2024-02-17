// src/components/Questionnaire.js
import React, { useState } from "react";

const Questionnaire = () => {
  const questions = [
    "What is your name?",
    "How old are you?",
    "What is your favorite color?",
    // Add more questions as needed
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Handle the submission logic here, e.g., send answers to a server
    console.log("Submitted answers:", answers);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Questionnaire</h2>
      <form>
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={`question-${index}`}
              className="block text-sm font-medium text-gray-700"
            >
              {question}
            </label>
            <button
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Dark
            </button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Questionnaire;
