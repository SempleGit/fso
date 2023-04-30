import Stat from "./Stat";
import Percentage from "./Percentage.js";

const Statistics = ({ stats }) => {
  const [good, neutral, bad] = stats;
  const total = stats.reduce((a, c) => a + c);
  return <div>
    <h2>Statistics</h2>
    <Stat stat="Good" count={good} />
    <Stat stat="Neutral" count={neutral} />
    <Stat stat="Bad" count={bad} />
    <Stat stat="All" count={total} />
    <Stat stat="Average" count={(good * 1 + neutral * 0 + bad * -1) / total} />
    <Percentage text="Positive" per={good} total={total} />
  </div>
}

export default Statistics