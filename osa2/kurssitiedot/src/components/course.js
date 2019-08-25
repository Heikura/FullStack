import React from 'react'

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

export default Course
