import { GET_HOME_TOP_ARTISTS } from "../../actionTypes";
const initialState = {
  artists: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_TOP_ARTISTS:
      return {
        ...state,
        artists: action.payload.artists
      };
    default:
      return state;
  }
};
