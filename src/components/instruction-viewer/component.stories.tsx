import * as React from 'react';
import { storiesOf } from '@storybook/react';

import InstructionViewer from '.';

const l1 = `
## Lesson 1: Contract declaration \n
Let’s begin from the basics.
The contract that you’ll be deploying to the blockchain has to have a name by which it could later be identified.
The format for specifying is simply

\`\`\`
contract [ContractName]
\`\`\`

Where you replace the \`[ContractName]\` with the actual name for your contract.
Note: The contract name has to start with a capital letter.
`;

storiesOf('Instruction Viewer', module).add('default', () => (
  <InstructionViewer instruction={l1} />
));
// .add('at the first lesson', () => (
//   <LessonNavigator lessonNumber={0} total={5} goNext={goNext} goBack={goBack} t={t} />
// ))
// .add('at the last lesson', () => (
//   <LessonNavigator lessonNumber={5} total={5} goNext={goNext} goBack={goBack} t={t} />
// ));
