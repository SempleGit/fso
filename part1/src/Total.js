const Total = (props) => {
  const sum = props.exercises.reduce((a, c) => a + c);
  return <p>Total Number of exercises {sum}</p>
}

export default Total;