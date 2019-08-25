import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  const kurssit = courses.map(kurssi => {
    return <Course key={kurssi.name} course={kurssi} />
  })

  return (
    <div>
      <h1> Web development curriculum </h1>
      {kurssit}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>

  )
}

const Header = (props) => {
  return <h2> {props.course} </h2>
}

const Content = ({parts}) => {
    const rows = (parts) => parts.map(part =>
      <Part
        key={part.id}
        name={part.name}
        exercises={part.exercises}
      />
    )
    return (rows(parts))
}

const Part = (props) => {
  return <p> {props.name} {props.exercises} </p>
}

const Total = ({parts}) => {
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue.exercises
  }
  return (
    <b>
      Total of {parts.reduce(reducer, 0)} exercises
    </b>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
