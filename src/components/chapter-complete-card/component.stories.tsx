import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import ChapterCompleteCard from '.';
const navigate = (chapterNum, lessonNum) => console.log('navigate', chapterNum, lessonNum);

const t = (s) => s;

storiesOf('component.ChapterCompleteCard', module)
  .addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('last chapter: true', () => (
    <ChapterCompleteCard navigate={navigate} t={t} total={2} chapter={1} />
  ))
  .add('last chapter: false', () => (
    <ChapterCompleteCard navigate={navigate} t={t} total={1} chapter={1} />
  ));
