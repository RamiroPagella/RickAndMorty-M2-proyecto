const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case REMOVE_FAV:


        default:
            return state
    }
};

export default reducer