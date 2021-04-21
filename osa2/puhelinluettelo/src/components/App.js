import React, { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123 456 7890'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')

  const [ newNum, setNewNum ] = useState('')

  const [ currentFilter, setFilter] = useState('')

  const addPerson = (event) => {
    if (persons.map(p => p.name).includes(newName)){
      event.preventDefault()
      alert(`${newName} is already added to phonebook`);
    } else {
      event.preventDefault()
      const personObj = [{
        name: newName,
        number: newNum
      }]
      setPersons(persons.concat(personObj))
    }
  }

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
