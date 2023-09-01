import { Link } from 'react-router-dom'

export default function Card(props) {
   const {id, onClose} = props;

   


   return (
      <div>
         <button onClick={() => onClose(id) }>
            X
         </button>

         
            <h2>{props.name}</h2>
         

         <h2>
            {props.status}
         </h2>

         <h2>
            {props.species}
         </h2>

         <h2>
            {props.gender}
         </h2>

         <h2>
            {props.origin}
         </h2>
         <Link to={`/detail/${id}`}>
            <img src={props.image} alt={props.name} />
         </Link>
         
      </div>
   );
}
