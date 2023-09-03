import Card from './Card';
import './cards.css'

export default function Cards(props) {
   const {characters, onClose} = props;

   return (
      <div className='cards-container'>
         {
            characters.map(e => {
               return (
                  <Card 
                     name={e.name}
                     id={e.id}
                     status={e.status}
                     species={e.species}
                     gender={e.gender}
                     origin={e.origin.name}
                     image={e.image}
                     key={e.id}
                     onClose={onClose}
                  />
               )
            })
         }
      </div>
   )
}
