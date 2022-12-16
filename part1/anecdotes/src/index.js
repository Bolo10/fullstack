import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';

const Button = ({handler, text}) => {
  
  return (
  <div>
    <button onClick={handler}>
      {text}
    </button>
  </div>
)}
const Display = props => <div>has {props.value} votes</div>
const Title = props => <h1> {props.text} </h1>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([ 1,4,6,3,2,1 ])
  const [mayor , setMayor] = useState((points.indexOf(Math.max(...points))))
  
  const copy = [...points]
  const randomAnecdote = () =>{
    console.log('entra 1')
    const min = 0
    const max = 6
    let randomNumber = Math.floor((min + Math.random() * (max - min)))
    setSelected(randomNumber)
    console.log(mayor)
    setMayor((copy.indexOf(Math.max(...copy))))
    console.log(mayor)
  } 
  const addVote = indexAnecdote =>{
    console.log('entra 2')
    copy[indexAnecdote]+=1
    setPoints(copy)
    setMayor((copy.indexOf(Math.max(...copy))))
    console.log(mayor)
  }

  return (
    <div>
      
      <Title text="Anecdote of the day"/>
      {props.anecdotes[selected]}
      <Display value={copy[selected]}/>
      <Button handler={() => addVote(selected)} text='Vote'/>
      <Button handler={randomAnecdote} text='Next Anecdote'/>
      <Title text="Anecdote with most votes"/>
      {props.anecdotes[mayor]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App anecdotes={anecdotes} />);
