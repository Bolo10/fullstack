import React, { useState } from 'react'
import { Persons } from './components/Persons'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
const App = () => {
  const [ persons, setPersons ] = useState(
    [
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Ada Lovelace', number: '39-44-5323523' },
      { name: 'Dan Abramov', number: '12-43-234345' },
      { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]
) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filtered, setNameFiltered ] = useState('')
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    
  }
  const handleFilterChange = (event) =>{
    let nameToUpper  = event.target.value
    console.log(typeof nameToUpper, nameToUpper)
    const nameFiltered = persons.map(person => person.name.toUpperCase()).filter(element => element === nameToUpper.toUpperCase())
    setNameFiltered(nameFiltered)
  } 
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
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
      setNewNumber('')
    }
    
  }

  return (
    <div>
      
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} filtered={filtered}/>
      <h2>Add new</h2>
      <PersonForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
      
    </div>
  )
}
  
  export default App