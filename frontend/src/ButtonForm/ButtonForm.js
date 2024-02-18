// ButtonForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonObject from "./ButtonObject";
import "./ButtonForm.scss";

const ButtonForm = () => {
  const navigate = useNavigate();

  const [buttons, setButtons] = useState(ButtonObject);

  const handleButtonClick = (buttonNumber) => {
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.buttonNumber === buttonNumber
          ? { ...button, selected: !button.selected }
          : button
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const selectedButtons = buttons.filter((button) => button.selected);
    console.log("Selected Buttons:", selectedButtons);

    // Navigate to InputPage component
    navigate("/input");
  };

  let buttonClass = "button";

  return (
    <form onSubmit={handleSubmit}>
      <div className="formContainer">
        {buttons.map((button) => (
          <button
            key={button.buttonNumber}
            onClick={() => handleButtonClick(button.buttonNumber)}
            className={`${buttonClass} ${button.selected ? "selected" : ""}`}
            title={button.buttonTooltip}
            type="button" // Specify type as "button" to prevent form submission
          >
            {button.buttonLabel}
          </button>
        ))}
        <button className="next" type="submit">
          Next
        </button>
      </div>
    </form>
  );
};

export default ButtonForm;
