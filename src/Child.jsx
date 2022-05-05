import React from 'react';
import './child.styles.css'
export function InputSelect({ options, handleOnChange }) {
  return (
    <div>
      <select className="select-input" onChange={handleOnChange}>
        {options.map((option) => (
          <option className='select-option' key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}
