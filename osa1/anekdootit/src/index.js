import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const App = (props) => {
  // Luo listan pituisen arrayn täynnä nollia
  const points = Array(anecdotes.length).fill(0)
  
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(points)

  // Arpoo anekdootin listasta
  const handle = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  // Lisää äänestyksen
  const handleVote = (val) => {
    const copy = [...vote]
    copy[val] += 1
    setVote(copy)
  }

  return (
    <div>
      {console.log()}
      {props.anecdotes[selected]}
      <br/>
      <button type="button" onClick={() => handleVote(selected)}>vote</button>
      <button type="button" onClick={() => handle()}>next anecdote</button>
      {vote[selected]}
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
