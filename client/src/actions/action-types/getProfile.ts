import ActionType from ".";
import { Action } from "redux";

// Define the payload type for profile actions
export interface Profile {
    _id: string;
    user: string; // ObjectId as a string
    school: string;
    status: string;
    name: string;
    bio?: string; // Optional
    email: string;
    avatar: string;
  }
  
  // Define action interfaces
  export interface GetProfileAction extends Action<ActionType.GET_PROFILE> {
    payload: Profile;
  }
  
  export interface GetProfilesAction extends Action<ActionType.GET_PROFILES> {
    payload: Profile[];
  }
  
  export interface ProfileErrorAction extends Action<ActionType.PROFILE_ERROR> {
    payload: string;
  }
  
  export interface UpdateProfileAction extends Action<ActionType.UPDATE_PROFILE> {
    payload: Profile; // Assuming the update returns the updated profile
  }
  
  export interface ClearProfileAction extends Action<ActionType.CLEAR_PROFILE> {
    payload: {}
  }
  
  export interface AccountDeletedAction extends Action<ActionType.ACCOUNT_DELETED> {
    payload: {}
  }
  
  // Combine all profile action types into a union type
  export type ProfileAction =
    | GetProfileAction
    | GetProfilesAction
    | ProfileErrorAction
    | UpdateProfileAction
    | ClearProfileAction
    | AccountDeletedAction;