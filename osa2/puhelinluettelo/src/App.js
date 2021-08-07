import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')

  const [ newNum, setNewNum ] = useState('')

  const [ currentFilter, setFilter] = useState('')

  const addPerson = (event) => {
    if (persons.map(p => p.name).includes(newName)){
      event.preventDefault()
      alert(`${newName} is already added to phonebook`);
    } else {
      event.preventDefault()
      const personObj = {
        name: newName,
        number: newNum
      }
      personService
        .create(personObj)
        .then((response) => {
          setPersons(persons.concat(response))
        })

    //  setPersons(persons.concat(personObj))

    }
  }

  // Get data from json db
  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const handlePerson = (event) => {
    setNewName(event.target.value)
  }

  const handleNum = (event) => {
    setNewNum(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter currentFilter={currentFilter} setFilter={handleFilter}/>
      <h2> add a new </h2>
      <PersonForm addPerson={addPerson} newName={newName} handlePerson={handlePerson}
      newNum={newNum} handleNum={handleNum} />

      <h2>Numbers</h2>
      <Persons persons={persons} currentFilter={currentFilter} />
    </div>
  )

}

export default App
