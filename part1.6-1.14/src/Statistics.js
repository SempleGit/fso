import Stat from "./Stat";

const Statistics = ({ stats }) => {
  const [good, neutral, bad] = stats;
  return <div>
    <h2>Statistics</h2>
    <Stat stat="Good" count={good} />
    <Stat stat="Neutral" count={neutral} />
    <Stat stat="Bad" count={bad} />
  </div>
}

export default Statistics