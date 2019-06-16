import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // Nappien tilat
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Headerit
  const text1 = ["Give feedback", "Statistics"]
 
  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
        <Header text={text1[0]} />
      <div>
        <Button onClick ={handleGood} text = "Good" />
        <Button onClick ={handleNeutral} text = "Neutral" />
        <Button onClick ={handleBad} text = "Bad" />
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