import * as React from 'react';
import { storiesOf } from '@storybook/react';

import LessonProgressbar from '.';

storiesOf('Lesson Progressbar', module)
  .add('default', () => <LessonProgressbar current={2} total={5} />)
  .add('min', () => <LessonProgressbar current={0} total={5} />)
  .add('max', () => <LessonProgressbar current={5} total={5} />);
