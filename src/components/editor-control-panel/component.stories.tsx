import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ControlPanel from '.';

const t = (s: string) => s;
const hanldleToggle = () => console.log('hanldleToggle');
const handleCheckAnswer = () => console.log('handleCheckAnswer');

storiesOf('component.EditorControlPanel', module)
  .add('Editor Control Panel', () => (
    <ControlPanel
      t={t}
      hanldleToggle={hanldleToggle}
      handleCheckAnswer={handleCheckAnswer}
      isAnswerVisible={false}
      showTryAgain={false}
    />
  ))
  .add('show try again', () => (
    <ControlPanel
      t={t}
      hanldleToggle={hanldleToggle}
      handleCheckAnswer={handleCheckAnswer}
      isAnswerVisible={false}
      showTryAgain={true}
    />
  ))
  .add('show answer button', () => (
    <ControlPanel
      t={t}
      hanldleToggle={hanldleToggle}
      handleCheckAnswer={handleCheckAnswer}
      isAnswerVisible={false}
      showTryAgain={false}
    />
  ))
  .add('show answer button and answer ', () => (
    <ControlPanel
      t={t}
      hanldleToggle={hanldleToggle}
      handleCheckAnswer={handleCheckAnswer}
      isAnswerVisible={true}
      showTryAgain={false}
    />
  ));
