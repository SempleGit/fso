const Anecdote = ({ title, anecdote, votes }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

export default Anecdote;
