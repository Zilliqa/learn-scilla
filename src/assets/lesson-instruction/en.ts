import { LessonInstruction, CourseInstruction } from '../../typings';
const ch1 = `
## Chapter 1: Contract declaration \n
Change name "Bob" -> "Alice".
`;
const ch2 = `
## Chapter 2: Immutable variables \n
Change name "Bob" -> "Alice".
`;
const ch3 = `
## Chapter 3: Mutable variables\n
Change name "Bob" -> "Alice".
`;
const ch4 = `
## Chapter 4: Transition \n
Change name "Bob" -> "Alice".
`;
const ch5 = `
## Chapter 5: Declaring a temporary variable \n
Change name "Bob" -> "Alice".
`;

const lesson1: LessonInstruction = {
  title: 'Lorem ipsum dolor',
  chapters: [ch1, ch2, ch3, ch4, ch5]
};
const lesson2: LessonInstruction = {
  title: 'sed do eiusmod tempor',
  chapters: [ch1, ch2, ch3, ch4, ch5]
};

const en: CourseInstruction = [lesson1, lesson2];

export default en;
