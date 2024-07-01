type Auth = {
    token: string | null;
    isAuthenticated: boolean | null;
    loading: boolean;
    user: string | null;
    userSignin: {
      userInfo: string | null;
    };
}

export default Auth
