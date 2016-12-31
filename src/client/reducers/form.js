import { CHANGE_FORM_FIELD } from '../actions';

const initialState = {
  email: '',
  password: '',
  passwordValidate: '',
  error: '',
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_FIELD:
      return Object.assign({}, state, { [action.field]: action.value });
    default:
      return state;
  }
};

export default form;
