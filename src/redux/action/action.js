import {
  SET_NUMBER,
  SET_EMAIL,
  SET_NAME,
  SET_PHONE_NUMBER,
  OPTION_VALUE,
} from "../type/type";


export function Set_name(name) {
  return {
    type: SET_NAME,
    name: name,
  };
}

export function Set_number(number) {
  return {
    type: SET_NUMBER,
    number: number,
  };
}


export function Set_email(email) {
  return {
    type: SET_EMAIL,
    email: email,
  };
}

export function Set_phone_number(phone_number) {
  return {
    type: SET_PHONE_NUMBER,
    phone_number: phone_number,
  };
}

export function Set_option_value(option_value) {
  return {
    type: OPTION_VALUE,
    option_value: option_value,
  };
}