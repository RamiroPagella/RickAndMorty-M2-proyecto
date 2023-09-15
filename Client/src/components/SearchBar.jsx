import { React, useState } from 'react';
import './searchBar.css'

import { useDispatch } from 'react-redux';
import { addCharacter } from '../redux/actions';

export default function SearchBar(props) {
   const [ inputID, setInputID] = useState('');
   const dispatch = useDispatch();

   const handleChange = (event) => {
      event.preventDefault();
      setInputID(event.target.value);
   }

   return (
      <div className='form-container'>

         <input type='text' onChange={handleChange} value={inputID} />

         <button onClick={ () => {dispatch(addCharacter(inputID))} } > Agregar </button>

      </div>

      
   );
}
