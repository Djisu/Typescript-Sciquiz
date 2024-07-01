import ActionType from "./action-types";
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

export interface Profiles {
    profiles: Profile[]
}  
 
export interface GetProfilesSuccess extends Action<ActionType.GET_PROFILES> {
    payload: Profiles
}

export interface GetProfilesFail extends Action<ActionType.GET_PROFILES_FAIL> {
    payload: []
}

export type GetProfilesAction = GetProfilesSuccess | GetProfilesFail 
