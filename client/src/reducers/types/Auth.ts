import { User } from "../../actions/action-types/user";

export interface AuthState {
    token: string | null;
    isAuthenticated: boolean | null;
    loading: boolean;
    user: User | null;
  }