export const SET_CH1_PROGRESS: string = 'SET_LOCAL_PROGRESS';
export const setCh1Progress = (ch1Progress) => ({
  type: SET_CH1_PROGRESS,
  payload: { ch1Progress }
});

export default function persistReducer(state = { ch1Progress: 0 }, action) {
  switch (action.type) {
    case SET_CH1_PROGRESS:
      return {
        ...state,
        ch1Progress: action.payload.ch1Progress
      };
    default:
      return state;
  }
}
