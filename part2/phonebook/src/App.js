import React, { useState, useEffect } from 'react'
import { Persons } from './components/Persons'
import { Notification } from './components/Notification'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import axios from 'axios'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filtered, setNameFiltered ] = useState([])
  const [notifyMessage, setNotifyMessage] = useState(null)
  const [classMessage, setClassMessage] = useState('')
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons=> setPersons(initialPersons))

  }, [])

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    event.preventDefault()
    setNewName(event.target.value)
    
  }
  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    event.preventDefault()
    setNewNumber(event.target.value)
    
  }
  const handleFilterChange = (event) =>{
    //console.log(typeof nameToUpper, nameToUpper)
    const nameFiltered = persons.filter(element => element.name.toUpperCase() === event.target.value.toUpperCase())
    console.log(nameFiltered)
    setNameFiltered(nameFiltered)
  } 
  const addPerson = async (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const flag = persons.map(element => element.name).includes(newName)
    const personFiltered = persons.filter(element=> element.name.toUpperCase() === newName.toUpperCase()? element.id : '')
    console.log(personFiltered)
    if(flag){

      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        await personService
                .update(personFiltered[0].id, personObject)
                .then(personUpdated => {
                  setNotifyMessage(`Added ${personUpdated.name}`)
                  setClassMessage('success')
                  setTimeout(() => {
                  setNotifyMessage(null)
                }, 5000)
                })
                

        await personService
                .getAll()
                .then(persons =>{ 
                  console.log(persons)
                  setPersons(persons)
                  setNewName('')
                  setNewNumber('')
                })
      }
    }
    if(!flag){
      await personService
        .create(personObject)
        .then(newPerson => {
          setNotifyMessage(`Person ${newPerson.name} added`)
          setClassMessage('success')
          console.log(classMessage)
          setTimeout(() => {
            setNotifyMessage(null)
          }, 5000)
        })
        .catch(error => console.log(error))

      await personService
        .getAll()
        .then(persons =>{ 
          console.log(persons)
          setPersons(persons)
          setNewName('')
          setNewNumber('')
        })
    }
    
  }

  const deletePerson  = async (person) =>{
    console.log(person)
    if(window.confirm(`Delete ${person.name}?`)){
      await personService
        .deletePerson(person.id)
        .then(response => {
          setNotifyMessage(`Person ${person.name} deleted`)
          setClassMessage('success')
          console.log(classMessage)
          setTimeout(() => {
            setNotifyMessage(null)
          }, 5000)
        })
        .catch(error => {
          setNotifyMessage(`Person ${person.name} was already removed from server`)
          setClassMessage('error')
          setTimeout(() => {
            setNotifyMessage(null)
          }, 5000)
        })
      await personService
        .getAll()
        .then(persons =>{ 
        console.log(persons)
        setPersons(persons)
      })
    }
    
      
  }
  return (
    <div>
      
      <h2>Phonebook</h2>
      {notifyMessage? <Notification message={notifyMessage} notifyClass={classMessage} />: ''}
      <Filter handleFilterChange={handleFilterChange} filtered={filtered}/>
      <h2>Add new</h2>
      <PersonForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} deletePerson={deletePerson}/>
      
    </div>
  )
}
  
  export default App