import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Editor from '.';

const t = (s: string) => s;
const checkAnswer = () => console.log('checkAnswer');
const toggleShowAnswer = () => console.log('toggleShowAnswer');
const showHint = (code) => console.log(code);

storiesOf('component.EditorInput', module).add('Editor Input', () => (
  <Editor
    t={t}
    code="contract Xealgame"
    codeForDiff="contract Xealgame"
    answerCode="contract Zealgame"
    isAnswerVisible={false}
    showTryAgain={false}
    showHint={showHint}
    checkAnswer={checkAnswer}
    toggleShowAnswer={toggleShowAnswer}
  />
));
