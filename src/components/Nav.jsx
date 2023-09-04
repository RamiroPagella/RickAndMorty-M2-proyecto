import React from 'react';
import SearchBar from './SearchBar'
import { Link , useLocation} from 'react-router-dom'

import './nav.css'

export default function Nav(props) {
    const location = useLocation();

    // const estiloSinLink = {
    //     textDecoration: 'none', // Elimina el subrayado
    //     color: 'inherit', // Hereda el color del texto del elemento padre
    // };

    return (
        <div className='nav-container-z1'>

            <div className='nav-container-z2'>

                <Link to='/home' className='link'>
                    <span>Home</span>
                </Link>

                <Link to='/favorites' className='link'>
                    <span>Favorites</span>
                </Link>

                <Link to='/about' className='link'>
                    <span>About</span>
                </Link>

            </div>

            { location.pathname == '/home' && (<SearchBar />) }
            
        </div>

        
    )
}

