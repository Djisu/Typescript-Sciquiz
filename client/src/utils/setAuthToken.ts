import api from "./api";
import axios from 'axios';

// store our JWT in LS and set axios headers if we do have a token
const setAuthToken = (token: string) => {
  //console.log('in setAuthToken', token)

  if (token) {
    api.defaults.headers.common['Authorization'] = token;

    localStorage.setItem('token', token);
  } else {
    //console.log('in setAuthToken: no token found!!!')
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

export default setAuthToken;



