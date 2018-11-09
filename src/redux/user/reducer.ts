import * as userTypes from '../user/actions';

const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case userTypes.REMOVE_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: undefined,
        isSignUpSuccessful: undefined,
        isEmailVerified: undefined,
        errorMessage: undefined
      };

    case userTypes.GET_USER:
      return {
        ...state,
        isGettingUser: true,
        user: undefined
      };
    case userTypes.GET_USER_SUCCEEDED:
      return {
        ...state,
        isGettingUser: false,
        user: action.payload
      };
    case userTypes.GET_USER_FAILED:
      return {
        ...state,
        isGettingUser: false,
        user: undefined
      };

    case userTypes.SIGN_IN:
      return {
        ...state,
        isSigningIn: true
      };
    case userTypes.SIGN_IN_SUCCEEDED:
      return {
        ...state,
        isSigningIn: false
      };
    case userTypes.SIGN_IN_FAILED:
      return {
        ...state,
        isSigningIn: false
      };
    case userTypes.SIGN_UP:
      return {
        ...state,
        isSigningUp: true,
        isSignUpSuccessful: undefined
      };

    case userTypes.SIGN_UP_SUCCEEDED:
      return {
        ...state,
        isSigningUp: false,
        isSignUpSuccessful: true
      };
    case userTypes.SIGN_UP_FAILED:
      return {
        ...state,
        isSigningUp: false,
        isSignUpSuccessful: false
      };
    case userTypes.REQUEST_PASSWORD_RESET:
      return {
        ...state,
        isRequestingPasswordReset: true,
        isRequestPasswordResetSuccessful: undefined
      };
    case userTypes.REQUEST_PASSWORD_RESET_SUCCEEDED:
      return {
        ...state,
        isRequestingPasswordReset: false,
        isRequestPasswordResetSuccessful: true
      };
    case userTypes.REQUEST_PASSWORD_RESET_FAILED:
      return {
        ...state,
        isRequestingPasswordReset: false,
        isRequestPasswordResetSuccessful: false
      };
    case userTypes.RESET_PASSWORD:
      return {
        ...state,
        isResetting: true,
        isResetSuccessful: undefined
      };
    case userTypes.RESET_PASSWORD_SUCCEEDED:
      return {
        ...state,
        isResetting: false,
        isResetSuccessful: true
      };
    case userTypes.RESET_PASSWORD_FAILED:
      return {
        ...state,
        isResetting: false,
        isResetSuccessful: false
      };

    case userTypes.VERIFY_EMAIL:
      return {
        ...state,
        isVerifyingEmail: true,
        isEmailVerified: false,
        errorMessage: undefined
      };
    case userTypes.VERIFY_EMAIL_SUCCEEDED:
      return {
        ...state,
        isVerifyingEmail: false,
        isEmailVerified: true,
        errorMessage: undefined
      };
    case userTypes.VERIFY_EMAIL_FAILED:
      return {
        ...state,
        isVerifyingEmail: false,
        isEmailVerified: false,
        errorMessage: action.payload.errorMessage
      };

    default:
      return state;
  }
}
