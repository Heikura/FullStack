import React from 'react';

const Persons = (props) => {
  return (
    <div>
    {props.persons.filter(person => person.name.toLowerCase().includes(props.currentFilter.toLowerCase()
    )).map(person => (<p key={person.name}> {person.name} {person.number}</p>))}
    </div>
  );
}

export default Persons
