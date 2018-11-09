import * as userTypes from '../user/actions';

const initialState = {};

export default function persist(state = initialState, action) {
  switch (action.type) {
    case userTypes.SIGN_IN:
      return {
        ...state,
        accessToken: undefined
      };

    case userTypes.SIGN_IN_SUCCEEDED:
      return {
        ...state,
        accessToken: action.payload.accessToken
      };
    case userTypes.SIGN_IN_FAILED:
      return {
        ...state,
        accessToken: undefined
      };
    default:
      return state;
  }
}
