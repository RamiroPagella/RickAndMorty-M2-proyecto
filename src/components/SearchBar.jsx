import { React, useState } from 'react';
import './searchBar.css'

export default function SearchBar(props) {
   const [ id, setId ] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className='form-container'>
         <input type='text' onChange={handleChange} value={id} />
         <button onClick={() => props.onSearch(id) }>Agregar</button>
      </div>

      
   );
}
