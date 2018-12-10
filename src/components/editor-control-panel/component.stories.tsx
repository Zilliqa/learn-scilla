import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ControlPanel from '.';

const t = (s: string) => s;
const handleShowHint = () => console.log('handleShowHint');
const hanldleToggle = () => console.log('hanldleToggle');
const handleCheckAnswer = () => console.log('handleCheckAnswer');

storiesOf('Editor Control Panel', module)
  .add('default', () => (
    <ControlPanel
      t={t}
      handleShowHint={handleShowHint}
      hanldleToggle={hanldleToggle}
      handleCheckAnswer={handleCheckAnswer}
      isAnswerVisible={false}
      isAnswerButtonVisible={false}
      showTryAgain={false}
    />
  ))
  .add('show try again', () => (
    <ControlPanel
      t={t}
      handleShowHint={handleShowHint}
      hanldleToggle={hanldleToggle}
      handleCheckAnswer={handleCheckAnswer}
      isAnswerVisible={false}
      isAnswerButtonVisible={false}
      showTryAgain={true}
    />
  ))
  .add('show answer button', () => (
    <ControlPanel
      t={t}
      handleShowHint={handleShowHint}
      hanldleToggle={hanldleToggle}
      handleCheckAnswer={handleCheckAnswer}
      isAnswerVisible={false}
      isAnswerButtonVisible={true}
      showTryAgain={false}
    />
  ))
  .add('show answer button and answer ', () => (
    <ControlPanel
      t={t}
      handleShowHint={handleShowHint}
      hanldleToggle={hanldleToggle}
      handleCheckAnswer={handleCheckAnswer}
      isAnswerVisible={true}
      isAnswerButtonVisible={true}
      showTryAgain={false}
    />
  ));
