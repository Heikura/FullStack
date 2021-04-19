import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '123 456 7890'}
  ])
  const [ newName, setNewName ] = useState('')

  const [ newNum, setNewNum ] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(person => <p key={person.name}> {person.name} {person.number}</p>)}
    </div>
  )

}

export default App
