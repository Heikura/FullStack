import React from 'react';

const Filter = ({currentFilter, setFilter}) => {
  return (
    <div> filter shown with <input value={currentFilter} onChange={setFilter}/></div>
  );
}

export default Filter
