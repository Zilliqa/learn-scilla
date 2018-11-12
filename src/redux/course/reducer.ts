import lessonIntructions from '../../assets/lesson-instruction';
import lessonCodes from '../../assets/lesson-code';

const initialState = { lessonCodes, lessonIntructions };

export default function course(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
