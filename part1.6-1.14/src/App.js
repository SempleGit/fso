import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'
import Heading from './Heading'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Heading title="Give Feedback" />
      <Button text="good" click={handleGood} />
      <Button text="neutral" click={handleNeutral} />
      <Button text="bad" click={handleBad} />
      <Statistics stats={[good, neutral, bad]} />
    </div>
  )
}

export default App