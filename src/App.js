import React from 'react'
import { useState } from 'react'
import './App.css'


function App() {
  const [inputText, setInputText] = useState('')
  const [inputNumber, setInputNumber] = useState(0)
  const [leftOrRight, setLeftOrRight] = useState('Left')
  const [stripSpecialChar, setStripSpecialChar] = useState(false)

  const handleSideChange = (e) => {
    setLeftOrRight(e.target.value)
  }

  const handleTextInputChange = (e) => {
    setInputText(e.target.value)
  }

  const handleNumberInputChange = (e) => {
    setInputNumber(e.target.value)
  }

  const handleStripSpecialCharChange = (e) => {
    setStripSpecialChar(e.target.checked)
  }
  
  //Prevent submit from clearing data
  const preventSubmit = (e) => e.preventDefault()


  //This is where parsing is implemented based on user-defined rules
  const parseInput = (input) => {
    let parsedInput = input

    if (stripSpecialChar) {
      parsedInput = parsedInput.replace(/[^a-zA-Z0-9]/g, '')
    }
    if (leftOrRight == 'Left') {
      parsedInput = parsedInput.slice(0, inputNumber)
    } 
    if (leftOrRight == 'Right') {
      parsedInput = parsedInput.slice(-inputNumber)
    }
    
    return parsedInput
  }
  

  return (
    <>
      <div className="container">
        <form onSubmit={preventSubmit}>
          
          <p>I want to keep the</p>
          <select name="leftOrRight" id="side" onChange={handleSideChange}>
              <option value="Left">Left</option>
              <option value="Right">Right</option>
          </select>
          
          <input type="number" id="numberInput" placeholder="Enter a number" onChange={handleNumberInputChange}/>
          <br/>
          <p>characters</p>
          
          <input type="checkbox" id="stripSpecialChar" name="stripSpecialChar" onChange={handleStripSpecialCharChange}/>
          <label htmlFor="stripSpecialChar">Strip Special Characters</label>
          <br/>
          
          <input id="textInput" placeholder="Scan serial number here" onChange={handleTextInputChange}/>
          
        </form>
        
      </div>
      <div className="container">
        <h1>{parseInput(inputText)}</h1>
      </div>
    </>
  )
}

export default App
