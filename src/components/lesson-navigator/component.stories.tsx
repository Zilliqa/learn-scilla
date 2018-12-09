import * as React from 'react';
import { storiesOf } from '@storybook/react';

import LessonNavigator from '.';

const goNext = () => console.log('goNext');
const goBack = () => console.log('goBack');
const t = (s: string) => s;

storiesOf('Lesson Navigator', module)
  .add('default', () => (
    <LessonNavigator lessonNumber={2} total={5} goNext={goNext} goBack={goBack} t={t} />
  ))
  .add('at the first lesson', () => (
    <LessonNavigator lessonNumber={0} total={5} goNext={goNext} goBack={goBack} t={t} />
  ))
  .add('at the last lesson', () => (
    <LessonNavigator lessonNumber={5} total={5} goNext={goNext} goBack={goBack} t={t} />
  ));
