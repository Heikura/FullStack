import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // Nappien tilat
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Headerit
  const text1 = ["Give feedback", "Statistics"]

  return (
    <div>
        <Header text={text1[0]} />
      <div>
        <Button handle ={() => setGood(good+1)} text = "Good" />
        <Button handle ={() => setNeutral(neutral+1)} text = "Neutral" />
        <Button handle ={() => setBad(bad+1)} text = "Bad" />
      </div>
        <Header text={text1[1]} />
      <div>
          Good {good}
      </div>
      <div>
          Neutral {neutral}
      </div>
      <div>
          Bad {bad}
      </div>
    </div>
  )
}

const Header = (props) => {
    return <h1> {props.text}</h1>
}

const Button = ({handle, text}) => (
    <button onClick={handle}>
          {text}
    </button>
)

ReactDOM.render(<App />,
  document.getElementById('root')
)
