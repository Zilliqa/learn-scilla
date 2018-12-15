export const SET_PROGRESS: string = 'SET_PROGRESS';
export const setProgress = (progress) => ({
  type: SET_PROGRESS,
  payload: { progress }
});

export default function courseReducer(state = {}, action) {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload.progress
      };

    default:
      return state;
  }
}
