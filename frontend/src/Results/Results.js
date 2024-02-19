import React, { useState, useEffect } from "react";
import imageObjects from "../Data/imageObjects";
import "./Results.scss";

const ResultsPage = () => {
  const items = localStorage.getItem("items");
  const array = JSON.parse(items);
  const suggestion = localStorage.getItem("suggestion");

  // Split the text into sections based on double line breaks
  const sections = suggestion.split('\n\n');

  // Function to format each section
  const formatSection = (section) => {
    const lines = section.split('\n'); // Split the section into lines
    const title = lines[0].replace(/\*\*(.*?)\*\*/g, '<h2>$1</h2>'); // Format the title
    const items = lines.slice(1).map(line => line.replace(/^\s*\*\s*(.*?)$/g, '<li>$1</li>')).join(''); // Format the list items
    return `<div>${title}<ul>${items}</ul></div>`; // Combine title and list items
  };

  // Format each section and join them together
  const inputt = sections.map(section => formatSection(section)).join('');
  const formattedText = inputt.replace(/["\*\\n]/g, '');

  return (
    <div>
      <h1>List of Objects Detected</h1>
      <ol>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <div>
        <h1>Suggestions</h1>
        <div  className="suggestions" dangerouslySetInnerHTML={{ __html: formattedText }}></div>
      </div>
    </div>
  );
};

export default ResultsPage;