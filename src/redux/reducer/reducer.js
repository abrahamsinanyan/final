import {
  OPTION_VALUE,
  SET_EMAIL,
  SET_NAME,
  SET_NUMBER,
  SET_PHONE_NUMBER,
} from "../type/type";

function rootReducer(state = {unic: '56'}, action) {
  switch (action.type) {
    case SET_NUMBER:
      return Object.assign({}, state, {
        number: action.number,
      });
    case SET_NAME:
      return Object.assign({}, state, {
        name: action.name,
      });
    case SET_EMAIL:
      return Object.assign({}, state, {
        email: action.email,
      });
    case SET_PHONE_NUMBER:
      return Object.assign({}, state, {
        phone_number: action.phone_number,
      });
    case OPTION_VALUE:
      return Object.assign({}, state, {
        option_value: action.option_value,
      });

    default:
      return state;
  }
}
export default rootReducer;
