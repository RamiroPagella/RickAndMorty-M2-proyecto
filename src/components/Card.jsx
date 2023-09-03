import { Link } from 'react-router-dom'
import './card.css'

export default function Card(props) {
   const {id, name, status, species, gender, origin, onClose} = props;



   return (
      <div className='card-container'>

         <button onClick={() => onClose(id) }>
            X
         </button>

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
               <img src={props.image} alt={props.name} />
            </Link>
         </div>
         
         
      </div>
   );
}
