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
  console.log(props)
  let part = props.parts.map((element, index) =>  <Part part={element} key={index}/>
  )
  return (
    <div>
      {part}
    </div>
  )
}
const Part = (props) => {
  console.log(props)

  return (
    <div>
      {props.part.name} {props.part.exercises}
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  let n = 0
  props.parts.forEach(element => {
    n+= element.exercises
  });
  return (
    <div>
      
     <p>Number of exercises {n}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render( React.createElement(App, null), document.getElementById('root')) 