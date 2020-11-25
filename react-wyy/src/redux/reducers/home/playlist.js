import { GET_TOP_PLATLIST, GET_PLAYLIST_CATLIST } from '../../actionTypes'
const initialState = {
    playlists: [],
    all: {},
    sub: [],
    categories: {},
    total: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PLAYLIST_CATLIST:
            return {
                ...state,
                ...action.payload
            }
        case GET_TOP_PLATLIST:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};
