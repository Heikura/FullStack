import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // Nappien tilat
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [allClicks, setAll] = useState(0)

  // Headerit
  const text1 = ["Give feedback", "Statistics"]

  const handleGood = () => {
    setGood(good+1)
    setAll(allClicks + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
    setAll(allClicks + 1)
  }
  const handleBad = () => {
    setBad(bad+1)
    setAll(allClicks + 1)
  }

  return (
    <div>
        <Header text={text1[0]} />

      <div>
        <Button handle={handleGood} text="Good" />
        <Button handle={handleNeutral} text="Neutral" />
        <Button handle={handleBad} text="Bad" />
      </div>
        <Header text={text1[1]} />

        <Statistics good={good} neutral={neutral} bad={bad} all={allClicks}/>

    </div>
  )
}

const Statistics = (props) => {
    if (props.all > 0){
      return(
      <div>
        <p>
          Good {props.good}
        </p>
        <p>
          Neutral {props.neutral}
        </p>
        <p>
          Bad {props.neutral}
        </p>
        <p>
          All {props.all}
        </p>
        <p>
          Average {(props.good*1 + props.neutral*0 + props.bad*(-1))/(props.all)}
        </p>
        <p>
          Positive {100*(props.good)/(props.all)} %
        </p>
      </div>
     )
    }
    else { 
      return <div> No feedback given. </div>
    }
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
