export const TOGGLE_AUTH_MODAL: string = 'TOGGLE_AUTH_MODAL';
export const OPEN_AUTH_MODAL: string = 'OPEN_AUTH_MODAL';
export const CLOSE_AUTH_MODAL: string = 'CLOSE_AUTH_MODAL';

export const toggleAuthModal = () => ({
  type: TOGGLE_AUTH_MODAL
});
export const openAuthModal = () => ({
  type: OPEN_AUTH_MODAL
});
export const closeAuthModal = () => ({
  type: CLOSE_AUTH_MODAL
});

export default function authReducer(state = { isAuthModalOpen: false }, action) {
  switch (action.type) {
    case TOGGLE_AUTH_MODAL:
      return {
        ...state,
        isAuthModalOpen: !state.isAuthModalOpen
      };
    case OPEN_AUTH_MODAL:
      return {
        ...state,
        isAuthModalOpen: true
      };
    case CLOSE_AUTH_MODAL:
      return {
        ...state,
        isAuthModalOpen: false
      };
    default:
      return state;
  }
}
