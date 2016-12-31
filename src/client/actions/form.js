import { CHANGE_FORM_FIELD } from './';

export function formChange(field, value) {
  return {
    type: CHANGE_FORM_FIELD,
    field,
    value,
  };
}
