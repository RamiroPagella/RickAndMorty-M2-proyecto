import axios from 'axios';

export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";



export const addCharacter = (id) => {
    return function (dispatch) {
        if (id === '') {
            const randomID = Math.floor(Math.random() * 827);
            axios(`https://rickandmortyapi.com/api/character/${randomID}`).then(({ data }) => {

                if (data.name) {
                    data.fav = false;
                    dispatch({
                        type: ADD_CHARACTER,
                        payload: data
                    })
                } 
                else {
                window.alert('¡No hay personajes con este ID!');
                }
            });
        }
        else {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                    data.fav = false;
                    dispatch({
                        type: ADD_CHARACTER,
                        payload: data
                    })
                } else {
                    window.alert('¡No hay personajes con este ID!');
                }
            });
        }
    }
}



export const removeCharacter = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payload: id
    }
}



export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}



export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}