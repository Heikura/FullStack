import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // Nappien tilat
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [allClicks, setAll] = useState([0])

  // Headerit
  const text1 = ["Give feedback", "Statistics"]


  return (
    <div>
        <Header text={text1[0]} />
      <div>
        <Button handle={() => setGood(good + 1)} text="Good" />
        <Button handle={() => setNeutral(neutral+1)} text="Neutral" />
        <Button handle={() => setBad(bad+1)} text="Bad" />
      </div>
        <Header text={text1[1]} />
        <Stats amount={good} text="Good"/>
        <Stats amount={neutral} text="Neutral" />
        <Stats amount={bad} text="Bad" />
        <Stats amount={good+neutral+bad} text={"All"} />
        <Stats amount={((good)*(1) + (neutral)*(0) + bad*(-1))/(good+bad+neutral)} text={"Average"} />
        <Stats amount={((good)/(good+bad+neutral))*100} text={"Positive"} />
    </div>
  )
}

const Stats = (props) => {
  if (props.text === "Positive"){
    return <div> {props.text} {props.amount} % </div>
  }
  return <div> {props.text} {props.amount} </div>
}

const Header = (props) => {
    return <h1> {props.text}</h1>
}

const Button = (props) => (
    <button onClick={props.handle}>
          {props.text}
    </button>
)

ReactDOM.render(<App />,
  document.getElementById('root')
)
