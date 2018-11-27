import { LessonInstructionType } from '../../../../typings';

const ch1 = `
## Chapter 1: Contract declaration \n
Explanation about comments, Contract, immutable variables
`;
const ch2 = `
## Chapter 2: Immutable variables \n
Explanation about why we choose to define ’owner’ and what’s ByStr20
`;
const ch3 = `
## Chapter 3: Mutable variables\n
Make a fixed player Alice. Start with one field, that will just declare the player name to be Alice
`;
const ch4 = `
## Chapter 4: Transition \n
Explain transition, make an empty one.
Go into details about how one can call transitions and how this part differs from the usual programming.
`;
const ch5 = `
## Chapter 5: Declaring a temporary variable \n
Declare a temporary variable. Declare a mutable variable: player2
Include the link for the cheat-sheet that includes all the major mutable and temporary variable type declaration in a single place.
`;
const ch6 = `
## Chapter 6: Changing a mutable field \n
Do this one carefully.\n
Explain the ways in which the syntax differs.\n
--do the part described below later.-\n
Explain what’s the basic issue with updating the fields in blockchain. Give this method some proper name such as three-step update. Make them understand what is happening.
Do it.\n
Tell again the advantage and the superiority of this method.\n
Also explain that the format here is different.\n
For the exercise, make them only do the first step.
`;
const ch7 = `
## Chapter 7: Getting values \n
Explain how transitions are called. And sometimes they will take a value or values.\n
Show the format and then finally ask them to declare an empty transition changeName.
`;
const ch8 = `
## Chapter 8: Implicit variables \n
_sender etc.
`;
const ch9 = `
## Chapter 9: Summary \n
Give an interactive action here.
`;

const lesson1: LessonInstructionType = {
  title: 'Fundamentals',
  chapters: [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9]
};

export default lesson1;
