// store.ts
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState } from './reducers'; // Adjust the path as necessary
import { AppAction } from './actions/action-types/IndexAll';
import setAuthToken from './utils/setAuthToken';

import { AuthState } from './reducers/auth';

const middleware = [thunk as ThunkMiddleware<RootState, AppAction>];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

let currentState: RootState = store.getState();

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState: RootState = currentState;

  currentState = store.getState();

  // if the token changes set the value in localStorage and axios headers
  if ((previousState.auth as AuthState).token !== (currentState.auth as AuthState).token) {
    let token  = {}

    if (localStorage.token){
      token  =localStorage.token
    }
    //(currentState.auth as AuthState);

     if (token !== null) {
      setAuthToken(localStorage.token);
    } else {
      // Handle the case when token is null
      console.error('Token is null, cannot set auth token');
    };
  }
});

export type AppDispatch = typeof store.dispatch;
export default store;







// // store.ts
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk, { ThunkMiddleware } from 'redux-thunk';
// import rootReducer, { RootState } from './reducers'; // Adjust the path as necessary
// import { AppAction } from './actions/action-types/IndexAll';
// import setAuthToken from './utils/setAuthToken';

// const middleware = [thunk as ThunkMiddleware<RootState, AppAction>];

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// let currentState: RootState = store.getState();

// store.subscribe(() => {
//   // keep track of the previous and current state to compare changes
//   let previousState: RootState = currentState;

//   currentState = store.getState();

//   // if the token changes set the value in localStorage and axios headers
//   if (previousState.auth.token !== currentState.auth.token) {
//     const { token } = currentState.auth;
//     setAuthToken(token);
//   }
// });

// export type AppDispatch = typeof store.dispatch;
// export default store;





// // store.ts
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk, { ThunkMiddleware } from 'redux-thunk';
// import rootReducer, { RootState } from './reducers'; // Adjust the path as necessary
// import { AppAction } from './actions/action-types/IndexAll';
// import setAuthToken from './utils/setAuthToken';

// const middleware = [thunk as ThunkMiddleware<RootState, AppAction>];

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// let currentState = store.getState();

// store.subscribe(() => {
//   // keep track of the previous and current state to compare changes
//   let previousState = currentState;

//   currentState = store.getState();

//   // if the token changes set the value in localStorage and axios headers
//   if (previousState.auth.token !== currentState.auth.token) {
//     const {token} = currentState.auth;
//     setAuthToken(token);
//   }
// });


// export type AppDispatch = typeof store.dispatch;
// export default store;


// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk, { ThunkMiddleware } from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { rootReducer, RootState } from './reducers'; // Assuming these are your root reducer and state

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, any>))
// );

// let currentState: AuthState = store.getState() as AuthState; // Provide AuthState type and cast the initial state

// store.subscribe(() => {
//   let previousState: AuthState = currentState; // Provide AuthState type

//   currentState = store.getState() as AuthState; // Cast the current state

//   if (previousState.auth.token !== currentState.auth.token) {
//     const { token } = currentState.auth;
//     setAuthToken(token);
//   }
// });

// export default store;

//export type RootState = ReturnType<typeof rootReducer>;






// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index.js';
// import setAuthToken from './utils/setAuthToken.js';

// // Define the shape of your state
// interface RootState {
//   auth: {
//     token: string; // Assuming 'token' is of type string
//   };
// }

// const initialState = {}; // Set the initial state with RootState type

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// let currentState: RootState = store.getState() as RootState; // Provide RootState type and cast the initial state

// store.subscribe(() => {
//   let previousState: RootState = currentState; // Provide RootState type

//   currentState = store.getState() as RootState; // Cast the current state

//   if (previousState.auth.token !== currentState.auth.token) {
//     const { token } = currentState.auth;
//     setAuthToken(token);
//   }
// });

// export default store;





