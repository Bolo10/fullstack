import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'

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

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);