import { GET_TOPLIST_ARITST } from '../actionTypes'

const initialState = {
    artist: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TOPLIST_ARITST:
            return {
                ...state,
                artist: action.payload.artist
            }
        default:
            return state
    }
}