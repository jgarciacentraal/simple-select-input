import React from 'react';
import './style.css';
import { InputSelect } from './Child';

const options = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
];

export default function App() {
  const [selected, setSelect] = React.useState('');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <div className='item-selected'>
      {selected ? `you selected: ${selected}` : ''}
      </div>
     

      <InputSelect
        options={options}
        handleOnChange={(e) => setSelect(e.target.value)}
      />
    </div>
  );
}
