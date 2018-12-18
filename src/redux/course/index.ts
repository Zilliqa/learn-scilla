import courseInstructions from '../../locales/instructions';
import courseCodes from '../../course-codes';

const initialState = { courseCodes, courseInstructions };

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
