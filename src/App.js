import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  //define state
  const [numberToRemove, setNumberToRemove] = useState(0);
  const [leftOrRight, setLeftOrRight] = useState("Left");
  const [numberToKeep, setNumberToKeep] = useState(0);
  const [stripSpecialChar, setStripSpecialChar] = useState(false);
  const [inputText, setInputText] = useState("");

  //define event handlers
  const handleNumberToRemoveChange = (e) => setNumberToRemove(e.target.value);
  const handleLeftOrRightChange = (e) => setLeftOrRight(e.target.value);
  const handleNumberToKeepChange = (e) => setNumberToKeep(e.target.value);
  const handleStripSpecialCharChange = (e) =>
    setStripSpecialChar(e.target.checked);
  const handleInputTextChange = (e) => setInputText(e.target.value);

  //This is where parsing is implemented based on user-defined rules
  const parseInput = (input) => {
    let parsedInput = input.slice(numberToRemove);

    if (stripSpecialChar) {
      parsedInput = parsedInput.replace(/[^a-zA-Z0-9]/g, "");
    }
    if (leftOrRight == "Left") {
      parsedInput = parsedInput.slice(0, numberToKeep);
    }
    if (leftOrRight == "Right") {
      parsedInput = parsedInput.slice(-numberToKeep);
    }

    return parsedInput;
  };

  return (
    <>
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <p>I want to remove the first </p>
          <input
            type="number"
            placeholder="Enter a number"
            onChange={handleNumberToRemoveChange}
          />
          <br />
          <p>characters and then keep the</p>
          <select onChange={handleLeftOrRightChange}>
            <option value="Left">Left</option>
            <option value="Right">Right</option>
          </select>{" "}
          <input
            type="number"
            placeholder="Enter a number"
            onChange={handleNumberToKeepChange}
          />
          <br />
          <p>characters</p>
          <input type="checkbox" onChange={handleStripSpecialCharChange} />
          <label>Strip Special Characters</label>
          <br />
          <input
            id="textInput"
            placeholder="Scan serial number here"
            onChange={handleInputTextChange}
          />
        </form>
      </div>
      <div className="container">
        <h1>{parseInput(inputText)}</h1>
      </div>
    </>
  );
}

export default App;
