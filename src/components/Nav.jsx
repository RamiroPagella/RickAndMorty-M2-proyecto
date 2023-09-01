import React from 'react';
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    const { onSearch } = props;

    return (
        <div>
            <SearchBar onSearch={onSearch}/>

            <Link to='/about'>
                <p>ABOUT</p>
            </Link>

            <Link to='/home'>
                <p>HOME</p>
            </Link>
        </div>

        
    )
}

