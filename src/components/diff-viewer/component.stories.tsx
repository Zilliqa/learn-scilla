import * as React from 'react';
import { storiesOf } from '@storybook/react';

import DiffViewer from '.';

const t = (s) => s;

storiesOf('Diff Viewer', module)
  .add('default', () => (
    <DiffViewer
      t={t}
      answerCode={'contract Zealgame'}
      codeForDiff={'contract Xealgame'}
      showTryAgain={false}
      isAnswerVisible={false}
    />
  ))
  .add('with highlight', () => (
    <DiffViewer
      t={t}
      answerCode={'contract Zealgame'}
      codeForDiff={'contract Xealgame'}
      showTryAgain={true}
      isAnswerVisible={false}
    />
  ))
  .add('with answer', () => (
    <DiffViewer
      t={t}
      answerCode={'contract Zealgame'}
      codeForDiff={'contract Xealgame'}
      showTryAgain={false}
      isAnswerVisible={true}
    />
  ));
