import Course from './components/Course'
import React, { useState } from 'react'
import { Person } from './components/Part'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }
    const flag = persons.map(element => element.name).includes(newName)
    console.log(flag)
    if(flag){
      console.log(true)
      alert(`${newName} is already added to phonebook`)
    }
    if(!flag){
      setPersons(persons.concat(personObject))
      setNewName('')
    }
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      {persons.map(element => <Person person={element}/>)}
    </div>
  )
}
  
  export default App