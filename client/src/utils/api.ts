import axios from 'axios';
import store from '../store.ts';
import { LOGOUT } from '../actions/types.ts';

//console.log('in api')

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

//console.log('in api localStorage.token=== ', localStorage.token)

if (localStorage.token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
}

export default api;





// import axios from 'axios';
// import store from '../store.ts';
// import ActionType from '../actions/action-types/index.ts';

// // Create an instance of axios
// const api = axios.create({
//   baseURL: '/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
// /*
//   NOTE: intercept any error responses from the api
//  and check if the token is no longer valid.
//  ie. Token has expired or user is no longer
//  authenticated.
//  logout the user if the token has expired
// */

// api.interceptors.response.use(
//   (res) => res,

//   (err) => {
//     console.log('Error in api')

//     if (err.response.status === 401) {
//       store.dispatch({ type: ActionType.LOGOUT });
//     }
//     return Promise.reject(err);
//   }
// );

// export default api;





// import axios from 'axios';

// const api = axios.create({
//   baseURL: '/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// console.log('in api')

// if (localStorage.token) {
//   api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
// }

// export default api;




// // Create an instance of axios    //http://localhost:3000
// const api = axios.create({
//   baseURL: '/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
// /*
//   NOTE: intercept any error responses from the api
//  and check if the token is no longer valid.
//  ie. Token has expired or user is no longer
//  authenticated.
//  logout the user if the token has expired
// */

// api.interceptors.response.use(
//   (res) => res,

//   (err) => {
//     if (err.response.status === 401) {
//       store.dispatch({ type: LOGOUT });
//     }
//     return Promise.reject(err);
//   }
// );

// export default api;




// import axios from 'axios';
// import store from '../store.ts';
// import { LOGOUT } from '../actions/types.ts';

// // Create an instance of axios
// const api = axios.create({
//   baseURL: '/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// if (localStorage.token) {
//   api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
// }
/*
  NOTE: intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
*/

// api.interceptors.response.use(
//   (res) => res,

//   (err) => {
//     if (err.response.status === 401) {
//       store.dispatch({ type: LOGOUT });
//     }
//     return Promise.reject(err);
//   }
// );

//export default api;
