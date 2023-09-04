import { ADD_CHARACTER, REMOVE_CHARACTER, ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: [],
    characters: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites: state.myFavorites.filter(c => c.id !== Number(action.payload))
            }

        case ADD_CHARACTER:
            return {
                ...state,
                characters: [...state.characters, action.payload]
            }
        case REMOVE_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter(c => c.id !== action.payload)
            }
        default: return state
    }
};

export default rootReducer;