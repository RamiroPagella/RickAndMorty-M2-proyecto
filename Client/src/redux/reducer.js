import { ADD_CHARACTER, REMOVE_CHARACTER, ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload
            }

        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites: action.payload
            }

        case ADD_CHARACTER:
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_CHARACTER:
            return {
                ...state,
                allCharacters: state.allCharacters.filter(c => c.id !== action.payload)
            }
        default: return state
    }
};

export default rootReducer;