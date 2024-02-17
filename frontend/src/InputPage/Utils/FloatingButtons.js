import React, { useState } from "react";

const FloatingButtons = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Your page content goes here */}

      {/* Floating Next Button */}
      <button
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          margin: "16px",
          padding: "10px",
        }}
        onClick={goToNextPage}
      >
        Next
      </button>

      {/* Floating Previous Button */}
      <button
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          margin: "16px",
          padding: "10px",
        }}
        onClick={goToPreviousPage}
      >
        Previous
      </button>
    </div>
  );
};

export default FloatingButtons;
