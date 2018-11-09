export const REMOVE_ACCESS_TOKEN = 'REMOVE_ACCESS_TOKEN';
export const removeAccessToken = () => ({
  type: REMOVE_ACCESS_TOKEN
});

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCEEDED = 'GET_USER_SUCCEEDED';
export const GET_USER_FAILED = 'GET_USER_FAILED';
export const getUser = () => ({
  type: GET_USER
});

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_SUCCEEDED = 'SIGN_IN_SUCCEEDED';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const signIn = (body) => ({
  type: SIGN_IN,
  payload: body
});

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCEEDED = 'SIGN_UP_SUCCEEDED';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';
export const signUp = (body) => ({
  type: SIGN_UP,
  payload: body
});

export const VERIFY_EMAIL = 'VERIFY_EMAIL';
export const VERIFY_EMAIL_SUCCEEDED = 'VERIFY_EMAIL_SUCCEEDED';
export const VERIFY_EMAIL_FAILED = 'VERIFY_EMAIL_FAILED';
export const verifyEmail = (body) => ({
  type: VERIFY_EMAIL,
  payload: body
});

export const REQUEST_PASSWORD_RESET = 'REQUEST_PASSWORD_RESET';
export const REQUEST_PASSWORD_RESET_SUCCEEDED = 'REQUEST_PASSWORD_RESET_SUCCEEDED';
export const REQUEST_PASSWORD_RESET_FAILED = 'REQUEST_PASSWORD_RESET_FAILED';
export const requestPasswordReset = (body) => ({
  type: REQUEST_PASSWORD_RESET,
  payload: body
});

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCEEDED = 'RESET_PASSWORD_SUCCEEDED';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';
export const resetPassword = (body) => ({
  type: RESET_PASSWORD,
  payload: body
});
