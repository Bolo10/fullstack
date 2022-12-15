import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}
const Content = (props) => {
  const myExercises = props.excercises
  const arrivedParts = props.parts
  return (
    <div>
      <Part part={arrivedParts.part1} excercise={myExercises.exercises1}/>
      <Part part={arrivedParts.part2} excercise={myExercises.exercises2}/>
      <Part part={arrivedParts.part3} excercise={myExercises.exercises3}/>
    </div>
  )
}
const Part = (props) => {
  
  return (
    <div>
      <p>
        {props.part} {props.excercise}
      </p>
    </div>
  )
}
const Total = (props) => {
  const myExercises = props.excercises
  return (
    <div>
     <p>Number of exercises {myExercises.exercises1 + myExercises.exercises2 + myExercises.exercises3}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const excercises= {exercises1: 10,exercises2:7, exercises3:14}
  const parts={part1:'Fundamentals of React', part2: 'Using props to pass data', part3:'State of a component' }
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} excercises={excercises}/>
      <Total excercises={excercises}/>
    </div>
  )
}

ReactDOM.render( React.createElement(App, null), document.getElementById('root')) 