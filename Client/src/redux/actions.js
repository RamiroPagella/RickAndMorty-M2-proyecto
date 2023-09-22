import axios from 'axios';

export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";



export const addCharacter = (id) => {
    return async function (dispatch) {

        try {

            let apiURL = `http://localhost:3001/rickandmorty/character/${id}`
            if (id === '') {
                const randomID = Math.floor(Math.random() * 827);
                apiURL = `http://localhost:3001/rickandmorty/character/${randomID}`
            }
            const { data } = await axios(apiURL + id);

            if (data.name) {
                dispatch({
                    type: ADD_CHARACTER,
                    payload: data
                })
            } 
            else window.alert('¡No hay personajes con este ID!');

        } catch (error) {
            console.log(error);
        }
        
    }
}



export const removeCharacter = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payload: id
    }
}



export const addFav = (favorites) => { //se envia el array de favoritos que envio el servidor

    return {
        type: ADD_FAV,
        payload: favorites
    }

};



export const removeFav = (id) => {
    
    return async (dispatch) => {

        try {

            const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
            const { data } = await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });

        } catch (error) {

        }
        
        
    };
};