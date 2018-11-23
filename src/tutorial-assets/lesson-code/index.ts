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

const ic3 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Bob"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ac3 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Alice"
Transition changeName(newName: String)
tempvar <- player_name
end`;

const ch3: ChapterCodeType = {
  initialCode: ic3,
  answerCode: ac3
};

const ic4 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Bob"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ac4 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Alice"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ch4: ChapterCodeType = {
  initialCode: ic4,
  answerCode: ac4
};

const ic5 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Bob"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ac5 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Alice"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ch5: ChapterCodeType = {
  initialCode: ic5,
  answerCode: ac5
};

const ic6 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Bob"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ac6 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Alice"
Transition changeName(newName: String)
tempvar <- player_name
end`;

const ch6: ChapterCodeType = {
  initialCode: ic6,
  answerCode: ac6
};

const ic7 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Bob"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ac7 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Alice"
Transition changeName(newName: String)
tempvar <- player_name
end`;

const ch7: ChapterCodeType = {
  initialCode: ic7,
  answerCode: ac7
};

const ic8 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Bob"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ac8 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Alice"
Transition changeName(newName: String)
tempvar <- player_name
end`;

const ch8: ChapterCodeType = {
  initialCode: ic8,
  answerCode: ac8
};

const ic9 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Bob"
Transition changeName(newName: String)
tempvar <- player_name
end`;
const ac9 = `contract zealgame
(owner: ByStr20)
field player_name : String = "Alice"
Transition changeName(newName: String)
tempvar <- player_name
end`;

const ch9: ChapterCodeType = {
  initialCode: ic9,
  answerCode: ac9
};

const lesson1: LessonCodeType = [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9];

const course: CourseCodeType = [lesson1];

export default course;
