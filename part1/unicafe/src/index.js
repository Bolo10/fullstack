import React, { useState } from 'react'

import { createRoot } from 'react-dom/client';
const Display = props => <h1>{props.value}</h1>
const Statistics  = ({text, value}) =>(
    <tr>
      <th  scope="row">{text}</th>
      <td>{value}</td>
    </tr>
    )
  
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const History = ({values, text}) => {
  if (values.all  === 0) {
    return (
      <div>
        {text}
      </div>
    )
  }

  return (

      
      <table>
        <tbody>
          <Statistics  text="Good" value={values.good}/>
          <Statistics  text="Neutral" value={values.neutral}/>
          <Statistics  text="Bad" value={values.bad}/>
          <Statistics  text="All" value={values.all}/>
          <Statistics  text="Averge" value={values.avg}/>
          <Statistics  text="Positive %" value={values.percent}/>
        </tbody>
      </table>
      

  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const addGood = newValue => {
    setGood(newValue)
  }
  const addNeutral = newValue => {
    setNeutral(newValue)
  }
  const addBad = newValue => {
    setBad(newValue)
  }
  const all = good + neutral + bad
  const avg = (good - bad) / all
  const percent = (good * 100 ) / (all * 100)
  const values ={good, bad, neutral, all, avg, percent}
  return (
    <div>
      <Display value="Give Feedback"/>
      <Button handleClick={() => addGood(good + 1)} text="good"/>
      <Button handleClick={() => addNeutral(neutral + 1)} text="netural"/>
      <Button handleClick={() => addBad(bad + 1)} text="bad"/>
      <Display value="Statistics"/>
      <History  text="No FeedBack Given" values={values} />
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
