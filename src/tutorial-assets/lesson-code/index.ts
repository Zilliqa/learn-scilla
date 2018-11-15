import { ChapterCodeType, LessonCodeType, CourseCodeType } from '../../typings';

const ic1 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Bob"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ac1 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Alice"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ch1 = {
  initialCode: ic1,
  answerCode: ac1
};

const ic2 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Bob"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ac2 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Alice"
Transition changeName(newName: String)
tempvar <- player_name
end`;

const ch2: ChapterCodeType = {
  initialCode: ic2,
  answerCode: ac2
};

const lesson1: LessonCodeType = [ch1, ch2, ch1, ch1, ch1];
const lesson2: LessonCodeType = [ch1, ch2, ch1, ch1, ch1];

const course: CourseCodeType = [lesson1, lesson2];

export default course;
