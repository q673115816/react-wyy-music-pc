import {GET_TOP_SONG} from '../../actionTypes'

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TOP_SONG:
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state;
    }
};
