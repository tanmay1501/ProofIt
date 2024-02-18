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
      navigate("/input-page");
    }
  };

  useEffect(() => {
    navigate("/input-page");
  }, [navigate]);

  return (
    <div className="input-page-container">
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
            <source src={URL.createObjectURL(selectedFile)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="navigation">
        <button className="back" onClick={() => handleNavigation("back")}>
          Back
        </button>
        <button className="next" onClick={() => handleNavigation("next")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default InputPage;
