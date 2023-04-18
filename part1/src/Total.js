const Total = (props) => {
  const sum = props.parts.reduce((a, c) => a + c.exercises, 0);
  return <p>Total Number of exercises {sum}</p>
}

export default Total;