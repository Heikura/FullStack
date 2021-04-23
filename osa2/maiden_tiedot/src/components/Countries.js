import React from 'react';

const Countries = (props) => {
  const filtered = props.query.filter(q => q.name.toLowerCase().includes(props.currentFilter.toLowerCase()
))
  const tooMany = filtered.length > 10;
  const oneMatch = filtered.length === 1;
  return (
    <div>
    {tooMany ? (
    "Too many matches, specify another filter"
  ) :  oneMatch ? (
    <Country filtered={filtered} />
  ) : (
    filtered.map(q => (<p key={q.name}> {q.name}</p>))
  )}
    </div>
  );
}

const Country = (props) => {
  return (
    <div>
    <h2> {props.filtered[0].name} </h2>
    <div> capital {props.filtered[0].capital} </div>
    <div> population {props.filtered[0].population} </div>

    <h2> languages </h2>
    {props.filtered.map( q => (<p key={q.name}> <li> {q.languages[0].name} </li> </p>))}
    <img src={props.filtered[0].flag} width="30%" alt="flag"/>
    </div>
  );
}


export default Countries
