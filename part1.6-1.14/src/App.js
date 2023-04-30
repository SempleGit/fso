import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'
import Heading from './Heading'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    const newGood = good + 1;
    setGood(newGood);
    handleAggregates(newGood, neutral, bad);
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    handleAggregates(good, newNeutral, bad);
  }

  const handleBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
    handleAggregates(good, neutral, newBad);
  }

  const handleAggregates = (good, neutral, bad) => {
    const newTotal = total + 1;
    const newAverage = (good * 1 + neutral * 0 + bad * -1) / newTotal;
    setTotal(newTotal);
    setAverage(newAverage);
  }

  return (
    <div>
      <Heading title="Give Feedback" />
      <Button text="good" click={handleGood} />
      <Button text="neutral" click={handleNeutral} />
      <Button text="bad" click={handleBad} />
      {total > 0 ? <Statistics stats={[good, neutral, bad, total, average]} /> : <p>No Feedback Given</p>}
    </div>
  )
}

export default App