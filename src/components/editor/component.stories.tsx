import * as React from 'react';
import { storiesOf } from '@storybook/react';

import EditorWrapper from '.';

const t = (s: string) => s;
const proceed = () => console.log('proceed');
const pathname = 'path';
storiesOf('Editor', module).add('default', () => (
  <EditorWrapper
    initialCode={'contract Xealgame'}
    answerCode={'contract Zealgame'}
    t={t}
    proceed={proceed}
    pathname={pathname}
  />
));
