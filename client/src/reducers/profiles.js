import { GET_PROFILES } from '../actions/types.js';

const initialState = {
  profiles: [],
  loading: false,
};

function profilesReducer(state = initialState, action) {
  const { type, payload } = action;

  //  console.log('in profilesReducer: ', payload);

  switch (type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default profilesReducer;
