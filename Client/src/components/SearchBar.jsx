import { React, useState } from 'react';
import './searchBar.css'
//
import { BiSolidSearch } from 'react-icons/bi'
//
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
      <div className='search-form'>

         <input type='text' onChange={handleChange} value={inputID} placeholder='Ingrese ID de personaje (deje vacio para ID random)'/>

         <div className='search-button'>

            <BiSolidSearch 
               onClick={ () => {dispatch(addCharacter(inputID))} } 
               color='#212529'
               size={25}
             />
             
         </div>

      </div>

      
   );
}
