import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [position, setPosition] = useState("top");
  const tooltipValue = `On Hover Tooltip Value - ${position}`;

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };


  return (
    <div className="container">
      <div className="userInputs">
        <p>Choose the position</p>
        <div className="inputContainers">
          {['top', 'right', 'bottom', 'left'].map((pos) => (
            <button
              key={pos}
              onClick={() => handlePositionChange(pos)}
              className={position === pos ? "active" : ""}
            >
              {pos}
            </button>
          ))}
        </div>
      </div>

      <div className="hoverContainer">
        <div className="hoverBtn">
          <button>Hover over me!!</button>
        </div>

        <div className={`tip ${position}`}>
          {tooltipValue}
        </div>
      </div>
    </div>
  );
};

export default App;
