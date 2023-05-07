import './App.css';
import Anecdote from './Anecdote';
import Button from './Button';
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber);
  }

  const handleVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected]++;
    setVotes(copyVotes);
  }

  return (
    <div>
      <Anecdote title="Anecdote of the Day" anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={handleVote} name="Vote" />
      <Button handleClick={handleClick} name="New Anecdote" />
      <Anecdote title="Anecdote with the most votes" anecdote={anecdotes[votes.indexOf(Math.max(...votes))]} votes={votes[votes.indexOf(Math.max(...votes))]} />
    </div>
  )
}

export default App