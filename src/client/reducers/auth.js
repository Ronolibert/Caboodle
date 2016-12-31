import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../actions';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
};

// localStorage.getItem('id_token') ? true : false,

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.credentials,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      });
    case LOGOUT_SUCCESS:
      return Object.Assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    default:
      return state;
  }
};

export default auth;
