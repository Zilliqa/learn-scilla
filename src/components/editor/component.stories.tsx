import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Editor from '.';

const checkAnswer = () => console.log('checkAnswer');
const toggleShowAnswer = () => console.log('toggleShowAnswer');
const t = (s: string) => s;
const showHint = (code) => console.log(code);

storiesOf('Editor', module).add('default', () => (
  <Editor
    t={t}
    code="contract Zealgame"
    isAnswerVisible={false}
    isAnswerButtonVisible={false}
    showTryAgain={false}
    showHint={showHint}
    checkAnswer={checkAnswer}
    toggleShowAnswer={toggleShowAnswer}
  />
));
