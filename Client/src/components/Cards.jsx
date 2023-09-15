import Card from './Card';
import './cards.css'
import { useSelector } from 'react-redux'

//

export default function Cards(props) {
   const allCharacters = useSelector(state => state.allCharacters)

   return (
      <div className='cards-container'>
         {
            allCharacters?.map(({ name, id, status, species, gender, origin, image}) => {
               return (
                  <Card 
                     name={name}
                     id={id}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin}
                     image={image}
                     key={id}
                  />
               )
            })
         }
      </div>
   )
}
