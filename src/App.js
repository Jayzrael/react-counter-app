import { React, useState } from 'react'
import './App.css'


function App() {

  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(count => count + 1)
  }

  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1)
    }
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div className='container'>
      <h1>Counter App</h1>
      <p>Follow the instructions</p>
      <section className="appContainer">
        <span>{counter}</span>
        <div className="btnContainer">
          <button className="btn" onClick={decrease}>-</button>
          <button className="btn" onClick={increase}>+</button>
        </div>
        <button className="resetbtn" onClick={reset}>Reset</button>
        <p className="result">You have counted {counter} digit(s) </p>
      </section>
      <p>Made by Omole Israel</p>
    </div>

  );
}

export default App;
