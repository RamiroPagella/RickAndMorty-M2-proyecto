import Card from '../components/Card'

import './favorites.css'
import { useSelector } from 'react-redux';


export default function Favorites () {
    const myFavorites = useSelector(state => state.myFavorites);


    return (
        <div className="favorites-container">

            {
                myFavorites?.map(({name, id, status, species, gender, origin, image}) => {
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
                )})
            }

        </div>
    )

}