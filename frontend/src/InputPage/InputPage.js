import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./InputPage.scss";

const InputPage = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleNavigation = (btn) => {
    if (btn === "back") {
      navigate("/button-form");
    } else if (btn === "next") {
      handleAnalyze();
    }
  };

  const handleAnalyze = async () => {
    try {
      const formData = new FormData();
      formData.append("video", selectedFile);

      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      // Handle the response from the backend
      const result = await response.json();
      // let result = [
      //   "refrigerator",
      //   "cup",
      //   "bottle",
      //   "chair",
      //   "bed",
      //   "laptop",
      //   "person",
      // ];
      localStorage.setItem("results", JSON.stringify(result));
      console.log(result);
      navigate("/results-page");
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  useEffect(() => {
    navigate("/input-page");
  }, [navigate]);

  return (
    <div className="input">
      <div className="input-page-container">
        <div className="input-container">
          <h2>Upload Video</h2>
          <input
            type="file"
            id="fileUploadBtn"
            onChange={handleFileChange}
            accept="video/mp4,video/x-m4v,video/*"
          />

          {selectedFile && (
            <div className="video-container">
              <video controls autoPlay>
                <source
                  src={URL.createObjectURL(selectedFile)}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>

        <div className="navigation">
          <button className="back" onClick={() => handleNavigation("back")}>
            Back
          </button>
          <button className="next" onClick={() => handleNavigation("next")}>
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
