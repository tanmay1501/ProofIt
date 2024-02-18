import React from "react";
import imageObjects from "../Data/imageObjects";
import "./Results.scss";

const ResultsPage = ({ items }) => {
  return (
    <div className="results-page">
      <h1>Artistic Results Page</h1>
      {items.map((item) => (
        <div className="item-container" key={item}>
          <h3>{item}</h3>
          {imageObjects[item] &&
            imageObjects[item].map((picture) => (
              <div>
                <img
                  key={picture.id}
                  src={picture.before}
                  alt={`${item} ${picture.id}`}
                />
                <img
                  key={picture.id}
                  src={picture.after}
                  alt={`${item} ${picture.id}`}
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ResultsPage;
