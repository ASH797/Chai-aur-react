import React from 'react'
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);

  function handleInc() {
    setCounter(counter + 1);
  }


  function handleDec() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <div>
      <button onClick={handleInc}>
        Increment
      </button>

      <button onClick={handleDec}>
        Decrement
      </button>

      {counter}

    </div>

  )
}

export default App