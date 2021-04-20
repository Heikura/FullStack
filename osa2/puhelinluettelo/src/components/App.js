import React, { useState } from 'react'

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
      <div> filter shown with <input value={currentFilter} onChange={handleFilter}/></div>
      <h2> add a new </h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePerson}/>
        </div>
        <div>number: <input value={newNum} onChange={handleNum}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.filter(person => person.name.toLowerCase().includes(currentFilter.toLowerCase()
        )).map(person => (<p key={person.name}> {person.name} {person.number}</p>))}
    </div>
  )

}

export default App
