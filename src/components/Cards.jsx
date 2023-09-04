import Card from './Card';
import './cards.css'
import { useSelector } from 'react-redux'

export default function Cards(props) {
   const characters = useSelector(state => state.characters)


   return (
      <div className='cards-container'>
         {
            characters.map(({ name, id, status, species, gender, origin, image, fav }) => {
               return (
                  <Card 
                     name={name}
                     id={id}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     key={id}
                     fav={fav}
                  />
               )
            })
         }
      </div>
   )
}
