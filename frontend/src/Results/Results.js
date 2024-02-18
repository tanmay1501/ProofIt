import React from "react";
import imageObjects from "../Data/imageObjects";
import "./Results.scss";

const items = localStorage.getItem("results");
const images = items
  ? JSON.parse(items).map((item) => {
      const image = imageObjects.find((obj) => obj.id === item);
      return (
        <div className="result-item" key={image.id}>
          <h3>{image.id}</h3>
          <div className="image-container">
            <img src={image.before} alt="before" />
            <img src={image.after} alt="after" />
          </div>
        </div>
      );
    })
  : [];

const ResultsPage = () => {
  return (
    <div className="results-page">
      <h1>Results Page</h1>
      <div className="results-container">{images}</div>
    </div>
  );
};

export default ResultsPage;
