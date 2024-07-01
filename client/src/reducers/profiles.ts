import { ProfileAction } from '../actions/action-types/getProfile.ts';
import { GetProfilesAction } from '../actions/profiles.ts';
import { GET_PROFILES, GET_PROFILES_FAIL } from '../actions/types.ts';

// export interface Profile { 
//    bio?: string
//    email: string
//    name: string;
//    school: string;
//    status: string;
//    avatar: string
//    userName: string
//   _id: string
// }

export interface Profile { 
  avatar: string;
  bio?: string
  email: string;
  name: string;
  school: string;
  status: string;
  user: string; // Using the ObjectId as a string
  _id: string
}

export interface ProfilesState {
  profiles: Profile[]
  loading: boolean
  error?: string | null
}

const initialState: ProfilesState = {
  profiles: [],
  loading: true,
  error: null
};;

export const profilesReducer = (state = initialState, action: GetProfilesAction) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload || [],
        loading: false,
      };
      case GET_PROFILES_FAIL:
        return {
          ...state,
          profiles: [], // Clear the topics data in case of failure
          loading: false, // Set loading to false, as the data loading has failed
          error: payload,
        };  
    default:
      return state;
  }
}


