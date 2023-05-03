import StatisticsLine from "./StatisticsLine";
import Percentage from "./Percentage.js";

const Statistics = ({ stats }) => {
  const [good, neutral, bad, total, average] = stats;
  return <div>
    <h2>Statistics</h2>
    <table>
      <tbody>
        <StatisticsLine stat="Good" count={good} />
        <StatisticsLine stat="Neutral" count={neutral} />
        <StatisticsLine stat="Bad" count={bad} />
        <StatisticsLine stat="All" count={total} />
        <StatisticsLine stat="Average" count={average} />
        <Percentage text="Positive" per={good} total={total} />
      </tbody>
    </table>
  </div>
}

export default Statistics