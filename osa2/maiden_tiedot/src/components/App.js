import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Countries from './Countries'

const App = () => {

  const [query, setQuery] = useState([])
  const [currentFilter, setFilter] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setQuery(response.data)
    })
  }, []);

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter currentFilter={currentFilter} setFilter={handleFilter}/>
      <Countries query={query} currentFilter={currentFilter}/>
    </div>
  )
}

export default App;
