import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonObject from "./ButtonObject";
import "./ButtonForm.scss";

const ButtonForm = () => {
  const navigate = useNavigate();

  const [buttons, setButtons] = useState(ButtonObject);

  // Use an object to store hover state for each button
  const [hoveredButtons, setHoveredButtons] = useState({});

  const handleButtonClick = (buttonNumber) => {
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.buttonNumber === buttonNumber
          ? { ...button, selected: !button.selected }
          : button
      )
    );
  };

  const handleButtonHover = (buttonTooltip, isHovered) => {
    setHoveredButtons((prevHoveredButtons) => ({
      ...prevHoveredButtons,
      [buttonTooltip]: isHovered,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const selectedButtons = buttons.filter((button) => button.selected);
    console.log("Selected Buttons:", selectedButtons);

    // Navigate to InputPage component
    navigate("/input");
  };

  const isNextButtonDisabled = buttons.every((button) => !button.selected);

  return (
    <div className="btn-page">
      <div className="btnContainer">
        <table className="button-table">
          <thead></thead>
          <tbody>
            {buttons.map((button, index) => (
              <tr key={index}>
                <td>
                  <button
                    className={`button ${button.selected ? "selected" : ""}`}
                    onClick={() => handleButtonClick(button.buttonNumber)}
                    onMouseEnter={() =>
                      handleButtonHover(button.buttonTooltip, true)
                    }
                    onMouseLeave={() =>
                      handleButtonHover(button.buttonTooltip, false)
                    }
                  >
                    {button.selected
                      ? button.buttonLabel
                      : button.buttonLabel}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="navigation">
        <button
          className="next"
          type="submit"
          disabled={isNextButtonDisabled}
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ButtonForm;
