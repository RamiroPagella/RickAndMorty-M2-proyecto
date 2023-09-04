import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './card.css'
import { addFav, removeFav, removeCharacter } from '../redux/actions'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'




export default function Card(props) {

   const { id, name, status, species, gender, origin, image, fav } = props;
   const character = {id, name, status, species, gender, origin, image, fav}

   const favorites = useSelector(state => state.myFavorites);
   const thisFav = favorites.filter(f => f.id === id)

   const dispatch = useDispatch();
   const location = useLocation();




   const handleFavorite = (character) => {
      if (!thisFav[0]) {
         dispatch(addFav(character));
      } 
      else {
         dispatch(removeFav(id));
      }
   }
   




   return (
      <div className='card-container'>

         <div className='buttons-container'>
            
            {
               thisFav[0] ? ( <AiFillHeart onClick={() => {handleFavorite(character)}} className='fav-button' /> ) :
               ( <AiOutlineHeart onClick={() => {handleFavorite(character)}} className='fav-button' /> )

            }

            {
               location.pathname == '/home' ? 
               <TiDelete 
                  onClick={() => dispatch(removeCharacter(id))}
                  className='delete-button'
               /> : null
            }
            

         </div>
         

         <div className='info-container'>
            <p>Name:</p>
            <h2>
               {name}
            </h2>
         </div>

         <div className='info-container'>
            <p>Status:</p>
            <h2>
               {status}
            </h2>
         </div>

         <div className='info-container'>
            <p>Species:</p>
            <h2>
               {species}
            </h2>
         </div>

         <div className='info-container'>
            <p>Gender:</p>
            <h2>
               {gender}
            </h2>
         </div>
         
         <div className='info-container'>
            <p>Origin:</p>
            <h2>
               {origin}
            </h2>
         </div>
         

         <div className='image-container'>
            <Link to={`/detail/${id}`}>
               <img src={image} alt={name} />
            </Link>
         </div>
         
         
      </div>
   );
}
