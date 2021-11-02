import React from 'react'
import { useState } from 'react'
import './App.css'


function App() {
  
  //define state
  const [inputText, setInputText] = useState('')
  const [inputNumberToRemove, setInputNumberToRemove] = useState(0)
  const [inputNumberToKeep, setInputNumberToKeep] = useState(0)
  const [leftOrRight, setLeftOrRight] = useState('Left')
  const [stripSpecialChar, setStripSpecialChar] = useState(false)

  //define event handlers
  const handleSideChange = (e) => {
    setLeftOrRight(e.target.value)
  }

  const handleTextInputChange = (e) => {
    setInputText(e.target.value)
  }

  const handleNumberToKeepInputChange = (e) => {
    setInputNumberToKeep(e.target.value)
  }

  const handleNumberToRemoveInputChange = (e) => {
    setInputNumberToRemove(e.target.value)
  }

  const handleStripSpecialCharChange = (e) => {
    setStripSpecialChar(e.target.checked)
  }
  
  //Prevent submit from clearing data
  const preventSubmit = (e) => e.preventDefault()


  //This is where parsing is implemented based on user-defined rules
  const parseInput = (input) => {
    
    let parsedInput = input.slice(inputNumberToRemove)

    if (stripSpecialChar) {
      parsedInput = parsedInput.replace(/[^a-zA-Z0-9]/g, '')
    }
    if (leftOrRight == 'Left') {
      parsedInput = parsedInput.slice(0, inputNumberToKeep)
    } 
    if (leftOrRight == 'Right') {
      parsedInput = parsedInput.slice(-inputNumberToKeep)
    }
    
    return parsedInput
  }
  

  return (
    <>
      <div className="container">
        <form onSubmit={preventSubmit}>
          
          <p>I want to remove the first </p>
          <input type="number" placeholder="Enter a number" onChange={handleNumberToRemoveInputChange}/>
          <br/>
          <p>characters and then keep the</p>
          <select onChange={handleSideChange}>
              <option value="Left">Left</option>
              <option value="Right">Right</option>
          </select>  {''}
         
          <input type="number" placeholder="Enter a number" onChange={handleNumberToKeepInputChange}/>
          <br/>
          <p>characters</p>
          
          <input type="checkbox" onChange={handleStripSpecialCharChange}/>
          <label>Strip Special Characters</label>
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
