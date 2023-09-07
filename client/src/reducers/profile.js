import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
} from '../actions/types.js';

const initialState = {
  profile: {
    user: '',
    school: '',
    status: '',
    bio: '',
    name: '',
    email: '',
  },
  loading: false,
  error: null,
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  //  console.log('in profileReducer, payload is:', payload);
  //  console.log('payload.email== ', payload.email);

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile, // Keep the existing profile properties
          ...payload, // Update with new payload data
        },
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
}

export default profileReducer;
