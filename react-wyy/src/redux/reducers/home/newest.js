import { GET_TOP_SONG, GET_TOP_ALBUM } from '../../actionTypes'

const initialState = {
    data: [],
    monthData: [],
    weekData: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TOP_SONG:
            return {
                ...state,
                data: action.payload.data
            }
        case GET_TOP_ALBUM:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};
