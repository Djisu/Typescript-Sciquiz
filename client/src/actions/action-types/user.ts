import ActionType from ".";

// Define the payload types
export interface User {
  user: {
    name: string;
    email: string;
    avatar: string;
    isAdmin: boolean;
    token: string;
  };
  updateUser: (user: User['user'], isAdmin: User['user']) => void;
}
  
  export interface UserSignin {
    userInfo: string | null;
  }

  // types.ts
export interface IUserEdit {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    isAdmin: boolean;
    token: string;
  };
  updateUser: (user: IUserEdit['user']) => void;
}

// actions/user.ts
export interface UpdateUserAction {
  type: typeof ActionType.UPDATE_USER;
  payload: IUserEdit['user'];
}
