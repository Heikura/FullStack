import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')

  const [ newNum, setNewNum ] = useState('')

  const [ currentFilter, setFilter] = useState('')

  const [notfMessage, setNotfMessage] = useState(null)

  const addPerson = (event) => {
    if (persons.map(p => p.name).includes(newName)){
      event.preventDefault()
      if (window.confirm(`${newName} is already added, replace the old number?`)){
        const uPerson = persons.find((p) =>
          p.name.toLowerCase() === newName.toLowerCase())
        console.log(uPerson)
        const personObj = {
          name: newName,
          number: newNum
        }
        personService
          .update(uPerson.id, personObj)
          .then((response) => {
            setPersons(persons.map(person => person.id !== uPerson.id ? person : response))
          })
          setNotfMessage(
            `Changed number for ${newName}.`
          )
          setTimeout(() => {
            setNotfMessage(null)
          }, 3000)

      }
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
      setNotfMessage(
        `Added ${newName}.`
      )
      setTimeout(() => {
        setNotfMessage(null)
      }, 3000)
    //  setPersons(persons.concat(personObj))

    }
  }
  const deletePerson = (id, name) => {
      //console.log(name)
      if (window.confirm(`Delete ${name}?`)){
      personService
        .remove(id)
      setPersons(persons.filter((person) => person.id !== id))
    }
    setNotfMessage(
      `Deleted ${name}`
    )
    setTimeout(() => {
      setNotfMessage(null)
    }, 3000)
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className="notification">
        {message}
        </div>
    )
  }

  // Get data from json db
  useEffect(() => {
    axios
    .get(personService.baseUrl)
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
      <Notification message={notfMessage}/>
      <Filter currentFilter={currentFilter} setFilter={handleFilter}/>
      <h2> add a new </h2>
      <PersonForm addPerson={addPerson} newName={newName} handlePerson={handlePerson}
      newNum={newNum} handleNum={handleNum} />

      <h2>Numbers</h2>
      <Persons persons={persons} handleDelete={deletePerson} currentFilter={currentFilter} />
    </div>
  )

}

export default App
