import ActionType from ".";
import { Action } from "redux";

export interface Profile { 
    _id: string
    user: string; // Using the ObjectId as a string
    school: string;
    status: string;
    name: string;
    bio?: string
    email: string;
    avatar: string
  }
  

export interface ProfileRequest extends Action<ActionType.PROFILE_REQUEST> {
    payload: Profile
}

export interface ProfileSuccess extends Action<ActionType.PROFILE_SUCCESS> {
    payload: Profile
}

export interface ProfileFail extends Action<ActionType.PROFILE_FAIL> {
    payload: Profile
}


export interface ProfileLoaded extends Action<ActionType.PROFILE_LOADED> {
    payload: Profile
}

export type ProfileAction = ProfileRequest | ProfileSuccess | ProfileFail | ProfileLoaded 
