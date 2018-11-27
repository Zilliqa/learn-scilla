import { ChapterCodeType, LessonCodeType } from '../../../typings';

const ch1: ChapterCodeType = {
  initialCode: `contract zealgame
(owner: ByStr20)
field player_name : String = "Bob"
Transition changeName(newName: String)
tempvar <- player_name
end
`,
  answerCode: `contract zealgame
(owner: ByStr20)
field player_name : String = "Alice"
Transition changeName(newName: String)
tempvar <- player_name
end
`
};

const lesson1: LessonCodeType = [ch1, ch1, ch1, ch1, ch1, ch1, ch1, ch1, ch1];

export default lesson1;
