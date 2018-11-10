const ic1 = `
contract zealgame
(owner: ByStr20)
field player_name : String = "Bob"
Transition change(newName: String)
tempvar <- player_name
end
`;
const ac1 = `
contract zealgame
(owner: ByStr20)
field player_name : String = ”Alice”
Transition changeName(newName: String)
tempvar <- player_name
end
`;
const ch1 = {
  initialCode: ic1,
  answerCode: ac1
};

const ic2 = `
contract zealgame
(*Start typing from the line below *)
`;
const ac2 = `
contract zealgame
(owner: ByStr20)
field player_name : String = ”Alice”
Transition changeName(newName: String)
tempvar <- player_name
end
`;
const ch2 = {
  initialCode: ic2,
  answerCode: ac2
};

const lesson = {
  lesson1: [ch1, ch2, ch1, ch1, ch1]
};

export default lesson;
