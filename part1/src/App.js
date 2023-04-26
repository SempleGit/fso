import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => setCounter(counter + 1)
  const resetCounter = () => setCounter(0)

  return (
    <div>
      <button onClick={handleClick}>Count</button>
      <div>{counter}</div>
      <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default App