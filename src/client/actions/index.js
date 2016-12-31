import { requestLogin, receiveLogin, loginError } from './auth';
import { formChange } from './form';

// Authentication actions

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGUT_SUCCESS';

export const auth = { requestLogin, receiveLogin, loginError };


// Form Actions

export const CHANGE_FORM_FIELD = 'CHANGE_FORM_FIELD';
export const form = { formChange };

