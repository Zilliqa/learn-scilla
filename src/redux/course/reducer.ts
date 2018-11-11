import lessonIntructions from '../../asset/lesson-instruction';
import lessonCodes from '../../asset/lesson-code';

const initialState = { lessonCodes, lessonIntructions };

export default function course(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
