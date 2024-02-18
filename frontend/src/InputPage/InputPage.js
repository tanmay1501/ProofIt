import React, { useState } from "react";
import "./InputPage.scss";

const InputPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

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
    </div>
  );
};

export default InputPage;
