import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [query, setQuery] = useState([])

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/name/{su}')
    .then(response => {
      setQuery(response.data)
    })
  });
  console.log(setQuery.length)


  return (
    <div>
      <h2>asd</h2>
    </div>
  )
}

export default App;
