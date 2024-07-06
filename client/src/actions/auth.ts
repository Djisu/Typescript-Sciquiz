import api from '../utils/api.ts';
import detokenize from './detokenize.ts';
import { Dispatch } from 'redux';
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import  { RootState } from '../reducers/index.ts';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  LOGIN_REQUEST,
  COUNTED_QUESTION_REQUEST,
  COUNTED_QUESTION_SUCCESS,
  COUNTED_QUESTION_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from './types.ts';
import ActionType from './action-types';
import { ThunkAction } from 'redux-thunk';
import { AppAction } from './action-types/IndexAll.ts';
import { User } from './action-types/user.ts';
import { AuthState } from './action-types/auth.ts';
import { AuthAction } from './action-types/auth.ts';


import { AlertAction, SetAlertAction, setAlertValue } from './action-types/alert.ts';
import { Axios } from 'axios';
import { setAlert } from './alert.ts';

type FormData = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

interface IUserData {
  email: string
  isAdmin: boolean
}
interface IAlert {
  setAlert: (msg: string, notification: string) => void

}

// Define the structure of the login response
interface LoginResponse {
  token: string;
}

// Define the structure of the error response
interface ErrorResponse {
  errors: { msg: string }[];
}

// Example payload type for LOGIN_SUCCESS
interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: AuthState;
}


export const loadUser = (): ThunkAction<void, RootState, unknown, AuthAction> => async (dispatch: Dispatch<AuthAction>) => {
  //console.log('in loadUser!!!!')
  
  try {
    const res = await api.get('/auth');

    //console.log('res.data:: ', res.data)

    dispatch({
      type: ActionType.USER_LOADED,
      payload: res.data,
    });
  } catch (err: any) {
    console.error('Error loading user:', err);
   
    dispatch({
      type: ActionType.AUTH_ERROR,
      payload: err.message // "Error in loading user"
    });
  }
};

// Register User
export const register = (formData: FormData): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<AuthAction | any>) => {
  try {
    // Your registration logic
    const res = await api.post('/users', formData);
    dispatch({
      type: ActionType.REGISTER_SUCCESS,
      payload: res.data,
    });

    // Dispatching the loadUser thunk action creator
    await dispatch(loadUser());

  } catch (err: any) {
    console.error('Registration error:', err);
    // Handle errors if needed
    const { errors } = err.response.data;
    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: ActionType.REGISTER_FAIL,
      payload: "Error in fetching data"
    });
  }
};

// Login User
export const login = (email: string, password: string): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<any>
) => {
  const body = { email, password };

  console.log('in login action creator', email, password)

  dispatch({ type: ActionType.LOGIN_REQUEST });

  try {
    const res = await api.post('/auth', body);

    localStorage.setItem('token', res.data.token)

    //console.log('in action login: ', res.data.token)

    const [encryptedId, name, userEmail, isAdmin]: [string, string, string, boolean] = detokenize(res.data.token);

    localStorage.setItem('id', encryptedId);
    localStorage.setItem('name', name);
    localStorage.setItem('email', userEmail);
    localStorage.setItem('isAdmin', isAdmin.toString());

    const idx = localStorage.getItem('id')
    const namex = localStorage.getItem('name')
    const emailx =  localStorage.getItem('email')
    const isAdminx =  localStorage.getItem('isAdmin')

    const authPayload: AuthState = {
      token: res.data.token,
      isAuthenticated: true,
      loading: false,
      user: {
        name: namex || '',
        email: emailx || '',
        avatar: '', // Provide default or fetched avatar
        isAdmin: isAdminx || '',
        token: res.data.token,
      },
      userSignin: {
        userInfo: null, // Provide actual user info if available
      },
    };

    dispatch({
      type: ActionType.LOGIN_SUCCESS,
      payload: authPayload,
    });

    // Dispatch LOAD_USER action
    if (localStorage.token){
       dispatch({ type: ActionType.LOAD_USER });
       await dispatch(loadUser());
    }else {
      console.log('No token found')
    }
   
  } catch (err: any) {
    if (err.response && err.response.data) {
      const { errors } = err.response.data;
      if (errors) {
        errors.forEach((error: any) => dispatch(setAlert(error.msg, 'danger')));
      }
    }

    dispatch({
      type: ActionType.LOGIN_FAIL,
      payload: err.message,
    });
  }
};


// Logout
//export const loadUser = (): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<AuthAction | AlertAction>) => {
export const logout = (): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch) => {
  localStorage.removeItem('id');
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  localStorage.removeItem('isAdmin');

  //navigate('/login');
  await dispatch({ type: LOGOUT });
};

export const listUsers = (): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch, getState: any) => {
  dispatch({ type: USER_LIST_REQUEST });
  try {
    const { userSignin: { userInfo } } = getState();
    const { data } = await api.get('/users', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error: any) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: USER_LIST_FAIL, payload: message });
  }
};

export const userAnsweredQuestions = (userId: string): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch) => {
  dispatch({
    type: COUNTED_QUESTION_REQUEST,
  });
  try {
    const res = await api.get(`/auth/${userId}/answered-questions`);
    dispatch({ type: COUNTED_QUESTION_SUCCESS, payload: res.data });
  } catch (error: any) {
    dispatch({ type: COUNTED_QUESTION_FAIL, payload: error.message });
  }
};



export const updateUser = ({ email, isAdmin }: IUserData): ThunkAction<void, RootState, unknown, any> => {
  return async (dispatch: Dispatch) => {

    console.log('in updateUser action')
    try {
      // Perform the necessary actions (e.g., API calls, etc.)
      dispatch({ type: 'USER_UPDATE_REQUEST' });

      const user = { email, isAdmin }

      // Example: Simulate an asynchronous operation
      const { data } = await api.put(`/users/${email}`, user);

      // Dispatch the success action
      if (data) {
        dispatch({ type: 'USER_UPDATE_SUCCESS' });
        dispatch<any>(setAlert('Admin created', 'success'));
      }
      

      // You can also dispatch additional actions or perform other logic here

    } catch (error: any) {
      // Dispatch the failure action
      dispatch({ type: 'USER_UPDATE_FAIL', payload: error.message });
    }
  };
};

