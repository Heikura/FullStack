import React from 'react';

const Filter = ({currentFilter, setFilter}) => {
  return (
    <div> find countries <input value={currentFilter} onChange={setFilter}/></div>
  );
}

export default Filter
