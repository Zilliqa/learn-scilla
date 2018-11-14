import { LessonInstructionType, CourseInstructionType } from '../../typings';

const ch1 = `
## 챕터 1: Contract declaration \n
"Bob" -> "Alice"으로 이름을 변경하세요.
`;
const ch2 = `
## 챕터 2: Immutable variables \n
"Bob" -> "Alice"으로 이름을 변경하세요.
`;
const ch3 = `
## 챕터 3: Mutable variables\n
"Bob" -> "Alice"으로 이름을 변경하세요.
`;
const ch4 = `
## 챕터 4: Transition \n
Explain transition, make an empty one.
"Bob" -> "Alice"으로 이름을 변경하세요.
`;
const ch5 = `
## 챕터 5: Declaring a temporary variable \n
"Bob" -> "Alice"으로 이름을 변경하세요.
`;

const lesson1: LessonInstructionType = {
  title: 'Lorem ipsum dolor',
  chapters: [ch1, ch2, ch3, ch4, ch5]
};
const lesson2: LessonInstructionType = {
  title: 'sed do eiusmod tempor',
  chapters: [ch1, ch2, ch3, ch4, ch5]
};

const ko: CourseInstructionType = [lesson1, lesson2];

export default ko;
