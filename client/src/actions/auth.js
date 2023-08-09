import { useSelector } from 'react-redux';
import api from '../utils/api';
import { setAlert } from './alert';
import detokenize from './detokenize';

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
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/users', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  dispatch({ type: LOGIN_REQUEST });

  try {
    const res = await api.post('/auth', body);
    //
    //    console.log('typeOf res.data.user:', typeof res.data.user);
    //    console.log('res.data.token:', res.data.token);
    //
    const [encryptedId, name, email, isAdmin] = detokenize(res.data.token);

    console.log('encryptedId', encryptedId);
    console.log('name', name);
    console.log('email', email);
    console.log('isAdmin', isAdmin);

    localStorage.setItem('id', encryptedId);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('isAdmin', isAdmin);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });

export const listUsers = () => async (dispatch, getState) => {
  dispatch({ type: USER_LIST_REQUEST });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await api.get('/users', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    //const res = await api.get('/auth');
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_LIST_FAIL, payload: message });
  }
};
