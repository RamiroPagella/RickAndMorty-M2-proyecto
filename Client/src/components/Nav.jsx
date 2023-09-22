import React from 'react';
import SearchBar from './SearchBar'
import { Link , useLocation} from 'react-router-dom'
//icons:
import { HiHome } from 'react-icons/hi'
import { MdFavorite } from 'react-icons/md'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
//
import './nav.css'

export default function Nav(props) {
    const { pathname } = useLocation();


    return (
        <div className='nav-container'>

            <div className='nav-item-1'>

                <h1 className='page-title-container'>
                    RICK AND MORTY
                </h1>

            </div>  


            <div className='nav-item-2'>

                <div className='nav-buttons-container'>

                    <div className='nav-button'>
                        <Link to='/home' className='link'>
                            <HiHome color='#212529' size={25}/>
                        </Link>
                    </div>
                    <div className='nav-button'>
                        <Link to='/favorites' className='link'>
                            <MdFavorite color='#212529' size={25}/>
                        </Link>
                    </div>
                    <div className='nav-button'>
                        <Link to='/about' className='link'>
                            <BsFillQuestionCircleFill color='#212529' size={25}/>
                        </Link>                       
                    </div>
                    
                </div>

                <div className='search-form-container'>
                    { pathname == '/home' && (<SearchBar />) }
                </div>
                

                <div className='view-title-container'>
                    { pathname == '/home' && (<h1>HOME</h1>) }
                    { pathname == '/favorites' && (<h1>FAVORITES</h1>) }
                    { pathname == '/about' && (<h1>ABOUT</h1>) }
                </div>

            </div>

            
        </div>

        
    )
}

