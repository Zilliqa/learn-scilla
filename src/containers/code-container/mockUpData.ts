const i1 = `## CH1 \n ### Subtitle \n * item1`;
const ic1 = `
var x = 0;
var y = 0;
var y = 0;
`;
const ac1 = `
var x = 1;
var y = 1;
var z = x + y;
`;

const ch1 = {
  instruction: i1,
  initialCode: ic1,
  answerCode: ac1
};
const i2 = `## CH2 \n ### Subtitle \n * item1`;
const ic2 = `
var x = 0;
var y = 0;
var y = 0;
`;
const ac2 = `
var x = 1;
var y = 1;
var z = x + y;
`;

const ch2 = {
  instruction: i2,
  initialCode: ic2,
  answerCode: ac2
};
const lesson1 = [ch1, ch2];
const lessonList = [lesson1];

export default lessonList;
