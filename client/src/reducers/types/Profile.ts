// types.ts
export interface Profile {
    _id: string;
    user: string; // ObjectId as a string
    school: string;
    status: string;
    name: string;
    bio?: string; // optional
    email: string;
    avatar: string;
  }
  
  export interface IProfileState {
    profile: Profile | null;
    loading: boolean;
    error?: any;
  }
  
  export interface IProfilesState {
    profiles: Profile[];
    loading: boolean;
    error?: any;
  }