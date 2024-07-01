import React from 'react';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

interface IDecodedToken {
  user: {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  };
  iat: number;
  exp: number;
}

function detokenize(token: string): [string, string, string, boolean] {
  //console.log('IN detokenize');
  
  try {
   if (token){
    setAuthToken(token)
   }else{
    console.log('in detokenize no token')
   }

    // Decode the token to extract user information
    const decodedToken = jwtDecode<IDecodedToken>(token);

    //console.log('token:: ', token);

    localStorage.setItem('token', token)

    const { id, name, email, isAdmin } = decodedToken.user;

    // console.log('userId', id);
    // console.log('userName', name);
    // console.log('userEmail', email);
    // console.log('isAdmin', isAdmin);

    return [id, name, email, isAdmin];
  } catch (error) {
    console.error('Failed to decode token:', error);
    return ['', '', '', false]; // Return default values in case of error
  }
}

export default detokenize;
