import { useState } from 'react'
import './App.css'

function App() {
  const [size, setSize] = useState("")
  let [characters] = useState([''])
  const [upperCase] = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  const [lowerCase] = ['abcdefghijklmnopqrstuvwxyz']
  const [numbers] = ['1234567890']
  const [special] = ['!@#$%¨&*()-_=+/?|{}[]']

  const range = (e) => {
    setSize(e.target.value)
  }

  const generate = () => {
    
  }
  return (
    <>
      <div className="container">
        <h1>PIN Generator</h1>
        <div className="display">
          <input type="text" className='result' readOnly disabled="true" />
        </div>
        <p>How many characters will the password have?</p>
        
        <div className="row">
          <input type="range" min="5" max="30" onChange={range}/>
          <output>{size}</output>
        </div>
          <hr />
          <label>
              <input type="checkbox" />
              <span>Include Lowercase Letters?(a-z)</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Include Uppercase Letters?(A-Z)</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Include Numbers?(0-9)</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Include Special Characters?(@-*)</span>
            </label>

            <button onClick={generate}>Generate</button>
      </div>
    </>
  )
}

export default App
